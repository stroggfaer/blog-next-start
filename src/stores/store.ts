import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import authReducer from "@/stores/redux/auth";
import {createWrapper} from 'next-redux-wrapper';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => RootState = useStore
export const wrapper = createWrapper<RootState>(useStore);
