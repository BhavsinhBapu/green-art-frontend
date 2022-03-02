import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  user: {};
  isLoggedIn: boolean;
};

const initialState: any = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setAuthenticationState: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setUser, setAuthenticationState, setLoading } =
  userSlice.actions;
export default userSlice.reducer;
