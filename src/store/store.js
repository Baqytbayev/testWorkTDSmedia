import {configureStore} from "@reduxjs/toolkit";
import {randomSlice} from "./randomSlice";


export const store = configureStore({
    reducer: {
        random: randomSlice.reducer
    },
    devTools: true
})