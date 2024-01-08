import { createAction, createSlice , PayloadAction } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

// type
interface State {
    token: string | null;
}
// State
const initialState : State = {
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                token: action.payload,
            };
        },
    },
});



export const { setToken } = authSlice.actions;
export default authSlice.reducer;
