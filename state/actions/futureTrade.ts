import { appDashboardData, appDashboardDataWithoutPair, marketTradesDashboard, openBookDashboard, ordersHistoryDashboard, tradesHistoryDashboard } from "service/futureTrade";
import { setAllmarketTrades, setBuyOrderHistory, setCurrentPair, setDashboard, setOpenBookBuy, setOpenBooksell, setOpenOrderHistory, setSellOrderHistory, setTradeOrderHistory } from "state/reducer/exchange";
import Cookies from "js-cookie";

export const getDashboardData = (pair: string) => async (dispatch: any) => {
  const response = await appDashboardData(pair);
  dispatch(setDashboard(response));
};
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
