import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import userReducer from './userSlice'
import orientationReducer from "./orientationSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        orientation: orientationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch