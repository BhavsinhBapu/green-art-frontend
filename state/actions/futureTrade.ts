import { appDashboardData, appDashboardDataWithoutPair, marketTradesDashboard, ordersHistoryDashboard, tradesHistoryDashboard } from "service/futureTrade";
import { setAllmarketTrades, setBuyOrderHistory, setCurrentPair, setDashboard, setLastPriceData, setOpenBookBuy, setOpenBooksell, setOpenOrderHistory, setOrderData, setPairs, setSellOrderHistory, setTotalData, setTradeOrderHistory } from "state/reducer/exchange";
import { openBookDashboard } from "service/exchange";
import Cookies from "js-cookie";
import { updateChart } from "components/exchange/api/stream";
import { unlistenAllChannels } from "./exchange";

export const getDashboardData = (pair: string) => async (dispatch: any) => {
  const response = await appDashboardData(pair);
  dispatch(setDashboard(response));
};
export async function listenMessages(dispatch: any, user: any) {
  await unlistenAllChannels();
  //@ts-ignore
  if (!window.Echo) {
    //@ts-ignore
    window.Pusher = Pusher;
    //@ts-ignore
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "test",
      wsHost: process.env.NEXT_PUBLIC_HOST_SOCKET,
      wsPort: process.env.NEXT_PUBLIC_WSS_PORT
        ? process.env.NEXT_PUBLIC_WSS_PORT
        : 6010,
      wssPort: 443,
      forceTLS: false,
      cluster: "mt1",
      disableStats: true,
      enabledTransports: ["ws", "wss"],
    });
  }

  //@ts-ignore
  // dashboard-base_coin_id-trade_coin_id
  window.Echo.channel(
    `dashboard-${localStorage.getItem("base_coin_id")}-${localStorage.getItem(
      "trade_coin_id"
    )}`
  ).listen(".order_place", (e: any) => {
    if (e.orders.order_type === "buy")
      dispatch(setOpenBookBuy(e.orders.orders));
    if (e.orders.order_type === "sell")
      dispatch(setOpenBooksell(e.orders.orders));
    if (e.orders.order_type === "buy_sell") {
      dispatch(setOpenBookBuy(e.orders.buy_orders));
      dispatch(setOpenBooksell(e.orders.sell_orders));
    }
  });
  //@ts-ignore
  window.Echo.channel(
    `trade-info-${localStorage.getItem("base_coin_id")}-${localStorage.getItem(
      "trade_coin_id"
    )}`
  ).listen(".process", (e: any) => {
    dispatch(setAllmarketTrades(e.trades.transactions));

    updateChart({
      price: parseFloat(e?.last_trade?.price),
      ts: e?.last_trade?.time,
      base_coin_id: e?.order_data?.base_coin_id,
      trade_coin_id: e?.order_data?.trade_coin_id,
      total: parseFloat(e?.last_trade?.total),
    });
    dispatch(setPairs(e.pairs));
    e.last_price_data && dispatch(setLastPriceData(e.last_price_data));
    e.order_data && dispatch(setOrderData(e.order_data));
  });
  //@ts-ignore
  window.Echo.channel(
    `dashboard-${localStorage.getItem("base_coin_id")}-${localStorage.getItem(
      "trade_coin_id"
    )}`
  ).listen(`.process-${localStorage.getItem("user_id")}`, (e: any) => {
    dispatch(setOpenOrderHistory(e.open_orders.orders));
    dispatch(setSellOrderHistory(e.open_orders.sell_orders));
    dispatch(setBuyOrderHistory(e.open_orders.buy_orders));
    e?.order_data?.total && dispatch(setTotalData(e?.order_data?.total));
  });
  //@ts-ignore
  window.Echo.channel(
    `dashboard-${localStorage.getItem("base_coin_id")}-${localStorage.getItem(
      "trade_coin_id"
    )}`
  ).listen(`.order_place_${localStorage.getItem("user_id")}`, (e: any) => {
    dispatch(setOpenOrderHistory(e.open_orders.orders));
    dispatch(setSellOrderHistory(e.open_orders.sell_orders));
    dispatch(setBuyOrderHistory(e.open_orders.buy_orders));
    e?.order_data?.total && dispatch(setTotalData(e?.order_data?.total));
  });
}
export const initialDashboardCallAction =
  (pair: string, dashboard: any, setisLoading?: any) =>
  async (dispatch: any) => {
    // setisLoading && setisLoading(true);
    const token = Cookies.get("token");

    let response: any;

    if (pair) {
      response = await appDashboardData(pair);
      if (response?.pair_status === false) {
        response = await appDashboardData(response.pairs[0].coin_pair);
        await localStorage.setItem(
          "base_coin_id",
          response?.pairs[0]?.parent_coin_id
        );
        await localStorage.setItem(
          "trade_coin_id",
          response?.pairs[0]?.child_coin_id
        );
        await localStorage.setItem(
          "current_pair",
          response?.pairs[0]?.coin_pair
        );
        response?.pairs[0]?.coin_pair &&
          dispatch(setCurrentPair(response?.pairs[0]?.coin_pair));
      }
      if (!response?.pairs) {
        setisLoading && setisLoading(false);
        return;
      }
      if (response.success === false) {
        response = await appDashboardDataWithoutPair();
      }
    } else {
      response = await appDashboardDataWithoutPair();
      if (!response?.pairs) {
        setisLoading && setisLoading(false);
        return;
      }
    }

    if (pair) {
      await localStorage.setItem(
        "base_coin_id",
        response?.order_data?.base_coin_id
      );
      await localStorage.setItem(
        "trade_coin_id",
        response?.order_data?.trade_coin_id
      );
    } else {
      await localStorage.setItem(
        "base_coin_id",
        response?.pairs[0]?.parent_coin_id
      );
      await localStorage.setItem(
        "trade_coin_id",
        response?.pairs[0]?.child_coin_id
      );
      await localStorage.setItem("current_pair", response?.pairs[0]?.coin_pair);
      response?.pairs[0]?.coin_pair &&
        dispatch(setCurrentPair(response?.pairs[0]?.coin_pair));
    }

    await dispatch(setDashboard(response));

    const BuyResponse = await openBookDashboard(
      response?.order_data?.base_coin_id
        ? response?.order_data?.base_coin_id
        : response?.pairs[0]?.parent_coin_id,
      response?.order_data?.trade_coin_id
        ? response?.order_data?.trade_coin_id
        : response?.pairs[0]?.child_coin_id,
      "dashboard",
      "buy",
      50
    );
    dispatch(setOpenBookBuy(BuyResponse?.data?.orders));
    const SellResponse = await openBookDashboard(
      response?.order_data?.base_coin_id
        ? response?.order_data?.base_coin_id
        : response?.pairs[0]?.parent_coin_id,
      response?.order_data?.trade_coin_id
        ? response?.order_data?.trade_coin_id
        : response?.pairs[0]?.child_coin_id,
      "dashboard",
      "sell",
      50
    );
    dispatch(setOpenBooksell(SellResponse?.data?.orders));
    const marketTradesDashboardResponse = await marketTradesDashboard(
      response?.order_data?.base_coin_id
        ? response?.order_data?.base_coin_id
        : response?.pairs[0]?.parent_coin_id,
      response?.order_data?.trade_coin_id
        ? response?.order_data?.trade_coin_id
        : response?.pairs[0]?.child_coin_id,
      "dashboard",
      50
    );
    dispatch(
      setAllmarketTrades(marketTradesDashboardResponse?.data?.transactions)
    );
    if (
      response?.order_data?.base_coin_id &&
      response?.order_data?.trade_coin_id &&
      token
    ) {
      const ordersHistoryResponse = await ordersHistoryDashboard(
        response?.order_data?.base_coin_id,
        response?.order_data?.trade_coin_id,
        "dashboard",
        "buy_sell"
      );
      dispatch(setOpenOrderHistory(ordersHistoryResponse?.data?.orders));
      const sellOrderHistoryresponse = await ordersHistoryDashboard(
        response?.order_data?.base_coin_id,
        response?.order_data?.trade_coin_id,
        "dashboard",
        "sell"
      );
      dispatch(setSellOrderHistory(sellOrderHistoryresponse?.data?.orders));
      const buyOrderHistoryresponse = await ordersHistoryDashboard(
        response?.order_data?.base_coin_id,
        response?.order_data?.trade_coin_id,
        "dashboard",
        "buy"
      );
      dispatch(setBuyOrderHistory(buyOrderHistoryresponse?.data?.orders));
      const tradeOrderHistoryResponse = await tradesHistoryDashboard(
        response?.order_data?.base_coin_id,
        response?.order_data?.trade_coin_id,
        "dashboard"
      );
      dispatch(
        setTradeOrderHistory(tradeOrderHistoryResponse?.data?.transactions)
      );
    }

    setisLoading && setisLoading(false);
  };
