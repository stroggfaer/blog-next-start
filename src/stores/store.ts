import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "@/stores/redux/auth";
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
    configureStore({
        reducer: {
            auth: authReducer
        },
        devTools: true
    });

export type MakeStore = ReturnType<typeof makeStore>;

type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const wrapper = createWrapper<MakeStore>(makeStore);
export const store = makeStore();


