import { createSlice } from "@reduxjs/toolkit";
import { getUserDataFromCookies } from "../../Utils/helper/auth";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: getUserDataFromCookies(),
    },
    reducers: {
        fetchUserFromCookies: (state) => {
            const userData = getUserDataFromCookies();
            state.user = userData;
        }
    }
});

export const { setUser, fetchUserFromCookies } = userSlice.actions;

export default userSlice.reducer;
