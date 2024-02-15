import { createSlice } from "@reduxjs/toolkit";
import { defer } from "react-router-dom";

const initialState = {
    user: false
}

 
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload
        },
        logout: state => {
            localStorage.removeItem('user')
            state.user = false
        }
    }
})

export const {login, logout} = auth.actions

export default auth.reducer