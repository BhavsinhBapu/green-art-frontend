import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = {
    user: Object,
    isLoggedIn: boolean,
}

const initialState: UserType = {
    user: {},
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload.user
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.user = {}
            state.isLoggedIn = false
        },
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload.user
        },
        setAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { login } = userSlice.actions
export default userSlice.reducer

