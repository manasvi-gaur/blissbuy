import {createSlice} from "@reduxjs/toolkit";
import { getLoginStatusFromCookies } from "../../Utils/helper/auth";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLogged:getLoginStatusFromCookies(),
    },
    reducers:{
        login:(state)=>{
            state.isLogged = true;
        },
        logout:(state)=>{
            state.isLogged = false;
        }
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;