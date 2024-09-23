import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../utils/themes";

interface Orientation{
    portrait: boolean,
    landscape: boolean
}

const getWindowOrientation=()=>window.screen.orientation.type

const getOrientation=()=>{
    const orientation=getWindowOrientation();
    return {
        portrait: orientation==='portrait-primary',
        landscape: orientation==='landscape-primary'
    } as Orientation
}
const initialState = {
    orientation: getOrientation()
};

const orientationSlice = createSlice(
    {
        name: 'orientation',
        initialState,
        reducers: {
            setOrientation: (state, action) => {
                state.orientation=getOrientation()
            },
        }
    }
);

export const { setOrientation } = orientationSlice.actions;
export default orientationSlice.reducer;