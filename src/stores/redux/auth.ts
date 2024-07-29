import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthTokens } from "@/common/models";

// type
interface State {
    accessToken: string | null;
    refreshToken: string | null;
    permissions: any[];
    jwtData: any;
    user: any;
}

// State
const initialState: State = {
    accessToken: null,
    refreshToken: null,
    permissions: [],
    jwtData: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<AuthTokens>) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
    },
});

export const { setAuthToken } = authSlice.actions;
export default authSlice.reducer;
