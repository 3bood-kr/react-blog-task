import { configureStore } from "@reduxjs/toolkit";
import { newssSlice } from "./newsSlice";
import { TypedUseSelectorHook } from "react-redux";


export const store = configureStore({
    reducer: {
        news: newssSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch