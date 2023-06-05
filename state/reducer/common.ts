import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type commonType = {
  settings: {};
  theme: "dark";
};

const initialState: any = {
  settings: {},
  theme: "dark",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<commonType>) => {
      state.settings = action.payload;
    },
    setTheme: (state, action: any) => {
      state.theme = action.payload;
    },
  },
});

export const { setSettings, setTheme } = commonSlice.actions;
export default commonSlice.reducer;
