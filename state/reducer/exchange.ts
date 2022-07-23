import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExchangeState = {
  dashboard: any;
  currentPair: string;
  OpenBookBuy: Array<any>;
  OpenBooksell: Array<any>;
  openOrderHistory: Array<any>;
  sellOrderHistory: Array<any>;
  buyOrderHistory: Array<any>;
  tradeOrderHistory: Array<any>;
  publicTradesDashboard: Array<any>;
  marketTrades: Array<any>;
};
const initialState: ExchangeState = {
  dashboard: {},
  currentPair: "BTC_USDT",
  OpenBookBuy: [],
  OpenBooksell: [],
  openOrderHistory: [],
  sellOrderHistory: [],
  buyOrderHistory: [],
  tradeOrderHistory: [],
  publicTradesDashboard: [],
};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setDashboard: (state, action: PayloadAction<ExchangeState>) => {
      state.dashboard = action.payload;
    },
    setCurrentPair: (state, action: PayloadAction<string>) => {
      state.currentPair = action.payload;
    },
    setOpenBookBuy: (state, action: PayloadAction<Array<any>>) => {
      state.OpenBookBuy = action.payload;
    },
    setOpenBooksell: (state, action: PayloadAction<Array<any>>) => {
      state.OpenBooksell = action.payload;
    },
    setOpenOrderHistory: (state, action: PayloadAction<Array<any>>) => {
      state.openOrderHistory = action.payload;
    },
    setSellOrderHistory: (state, action: PayloadAction<Array<any>>) => {
      state.sellOrderHistory = action.payload;
    },
    setBuyOrderHistory: (state, action: PayloadAction<Array<any>>) => {
      state.buyOrderHistory = action.payload;
    },
    setTradeOrderHistory: (state, action: PayloadAction<Array<any>>) => {
      state.tradeOrderHistory = action.payload;
    },
    setPublicTradesDashboard: (state, action: PayloadAction<Array<any>>) => {
      state.publicTradesDashboard = action.payload;
    },
    setAllmarketTrades: (state, action: PayloadAction<Array<any>>) => {
      state.marketTrades = action.payload;
    },
  },
});

export const {
  setDashboard,
  setCurrentPair,
  setOpenBookBuy,
  setOpenBooksell,
  setOpenOrderHistory,
  setSellOrderHistory,
  setBuyOrderHistory,
  setTradeOrderHistory,
  setPublicTradesDashboard,
  setAllmarketTrades,
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
