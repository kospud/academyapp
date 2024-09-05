import { createSlice } from "@reduxjs/toolkit";

export enum pages{
    main,
    allcourses,
    myCourses,
    chat,
    profile
}
const initialState = {
    page: ''
};

const pageSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            setPage: (state, action) => {
                state.page = action.payload
            },
        }
    }
);

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;