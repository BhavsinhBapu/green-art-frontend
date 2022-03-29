import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExchangeState = {
  dashboard: any;
  currentPair: string;
};
const initialState: ExchangeState = {
  dashboard: {},
  currentPair: "BTC_USDT",
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
  },
});

export const { setDashboard, setCurrentPair } = exchangeSlice.actions;

export default exchangeSlice.reducer;
