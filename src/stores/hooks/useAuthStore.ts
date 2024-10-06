import { setAuthToken } from "@/stores/redux/auth";
import { useAppSelector, store, wrapper } from "@/stores/store";
import { AuthTokens } from "@/common/types";

// TODO api store auth;
export const useAuthStore = () => {

    const getState = () => {
        return store.getState().auth;
    };

    const state = useAppSelector((state) => state.auth);

    // Проверка токен;
    const authFetchToken = async () => {
        console.log('authFetchToken');
        const { accessToken, refreshToken } = getState();
        if (accessToken) {
            console.log('accessToken', accessToken);
        } else {
            authLogout();
        }
    };

    // Авторизация;
    const authLogin = async ({ username, password }: any) => {
        console.log('authLogin', username, password);
        // api;

        authSetToken({
            accessToken: '345dfgdfg34_accessToken',
            refreshToken: 'reterterte_refreshToken',
        });
    };

    // Сохранить store/куки;
    const authSetToken = ({ accessToken, refreshToken }: AuthTokens) => {
        store.dispatch(setAuthToken({ accessToken, refreshToken }));
    };

    // выйти;
    const authLogout = () => {
        authSetToken({
            accessToken: null,
            refreshToken: null,
        });
    };

    return {
        state,
        getState,
        authFetchToken,
        authLogin,
        authLogout,
    };
};
