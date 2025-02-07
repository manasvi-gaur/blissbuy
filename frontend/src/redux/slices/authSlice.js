import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage, getUserIdFromLocalStorage } from "../../Utils/helper/auth";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: !!getUserIdFromLocalStorage() && !!getTokenFromLocalStorage(),
        userId: getUserIdFromLocalStorage(),
        token: getTokenFromLocalStorage(),
    },
    reducers: {
        login: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.userId = action.payload.userId;
            state.token = action.payload.jwt;
        },
        logout: (state) => {
            state.isLogged = false;
            state.userId = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
