import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import authReducer from "@/store/redux/auth";
import {createWrapper} from 'next-redux-wrapper';
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => RootState = useStore
export const wrapper = createWrapper<RootState>(useStore);
