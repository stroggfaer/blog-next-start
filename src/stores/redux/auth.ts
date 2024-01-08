import { createAction, createSlice , PayloadAction } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';

// type
interface State {
    accessToken: string | null;
    refreshToken: string | null;
    permissions: any[],
    jwtData: any,
    user: any
}
// State
const initialState : State = {
    accessToken: null,
    refreshToken: null,
    permissions: [],
    jwtData: (null as unknown),
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                accessToken: action.payload?.accessToken || null,
                refreshToken: action.payload?.refreshToken || null,
            };
        },
    },
});



export const { setAuthToken } = authSlice.actions;
export default authSlice.reducer;
