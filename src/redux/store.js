import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice/loginSlice"
export const store = configureStore({
    reducer: {
        login: loginReducer
    }
})