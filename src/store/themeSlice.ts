import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../utills/themes";

const initialState = {
    theme: themes.black
};

const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            setTheme: (state, action) => {
                state.theme = action.payload
            },
        }
    }
);

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;