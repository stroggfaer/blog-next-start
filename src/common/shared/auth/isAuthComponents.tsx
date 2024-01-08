//"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const isAuthenticated = false;

export default function isAuthComponents(Component: any, redirectRout = '/') {
    return function IsAuth(props: any) {
        const auth = isAuthenticated;

        useEffect(() => {
            if (!auth) {
                return redirect(redirectRout);
            }
        }, []);

        if (!auth) {
            return null;
        }

        return <Component {...props} />;
    };
}
