import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "",
        password: "",
        email: "",
        isLoggedIn: false
    }
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.user.name = action.payload;
        },

        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },

        setUserPassword: (state, action) => {
            state.user.password = action.payload;
            state.user.isLoggedIn = true
        },
        // setUserData: (state, action) => {
        //     state.user.name = action.payload.name;
        //     state.user.email = action.payload.email;
        //     state.user.password = action.payload.password;
        //     state.user.isLoggedIn = true
        // },
        cleanData: (state) => {
            state.user.name = "";
            state.user.password = "";
            state.user.email = ""
        }
    }
})
export const { setUserName, setUserEmail, setUserPassword, cleanData, setUserData } = loginSlice.actions;
export default loginSlice.reducer;