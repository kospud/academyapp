import { createSlice } from "@reduxjs/toolkit";

export type User={
    firstname: string,
    secondname: string,
    mail: string,
    photo?: string
}

interface UserState{
    user?: User 
}
const initialState: UserState  = {
    user: undefined
};

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            login: (state, action) => {
                state.user=action.payload
            },
            logout: (state, action)=>{
                state.user=undefined
            }
        }
    }
);

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;