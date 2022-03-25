import {
  appDashboardData,
  buyLimitApp,
  buyMarketApp,
  buyStopLimitApp,
  sellLimitApp,
  sellMarketApp,
  sellStopLimitApp,
} from "service/exchange";
import { setDashboard } from "state/reducer/exchange";
import { setLoading } from "state/reducer/user";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";

export const initialDashboardCallAction =
  (pair: string) => async (dispatch: any) => {
    dispatch(setLoading(true));
    const response = await appDashboardData(pair);
    dispatch(setDashboard(response));
    dispatch(setLoading(false));
  };

export const buyLimitAppAction = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setBuyCoinData: any
) => {
  setLoading(true);
  const response = await buyLimitApp(
    amount,
    price,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
    setBuyCoinData({
      amount: 0,
      price: 0,
      total: 0,
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
export const buyMarketAppAction = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await buyMarketApp(
    amount,
    price,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
export const buyStopLimitAppAction = async (
  amount: number,
  total: number,
  limit: number,
  stop: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await buyStopLimitApp(
    amount,
    limit,
    stop,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
export const sellLimitAppAction = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setsellCoinData: any
) => {
  setLoading(true);
  const response = await sellLimitApp(
    amount,
    price,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
    setsellCoinData({
      amount: 0,
      price: 0,
      total: 0,
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
export const sellMarketAppAction = async (
  amount: number,
  price: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await sellMarketApp(
    amount,
    price,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
export const sellStopLimitAppAction = async (
  amount: number,
  total: number,
  limit: number,
  stop: number,
  trade_coin_id: string,
  base_coin_id: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await sellStopLimitApp(
    amount,
    limit,
    stop,
    trade_coin_id,
    base_coin_id
  );
  if (response.status === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setLoading(false);
};
