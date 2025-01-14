import { createSlice } from "@reduxjs/toolkit";
import { getUserDataFromCookies } from "../../Utils/helper/auth";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: getUserDataFromCookies(),
    },
    reducers: {
        // setUser: (state, action) => {
        //     state.user = action.payload;
        // },
        fetchUserFromCookies: (state) => {
            const userData = getUserDataFromCookies();
            state.user = userData;
        }
    }
});

export const { setUser, fetchUserFromCookies } = userSlice.actions;

export default userSlice.reducer;
