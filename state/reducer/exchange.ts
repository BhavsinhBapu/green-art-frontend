import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExchangeState = {
  dashboard: {};
};
const initialState: ExchangeState = {
  dashboard: {},
};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setDashboard: (state, action: PayloadAction<ExchangeState>) => {
      state.dashboard = action.payload;
    },
  },
});

export const { setDashboard } = exchangeSlice.actions;

export default exchangeSlice.reducer;
