"use client"
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import React, {useLayoutEffect} from "react";

export function ReduxProvider({ children }: { children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>
}
