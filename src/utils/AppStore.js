import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CreateSlice"

const AppStore = configureStore({
    reducer : {

        cart: cartReducer,
    }
}) 

export default AppStore