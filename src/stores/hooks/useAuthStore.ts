import { setAuthToken } from "@/stores/redux/auth";
import { useAppSelector, store } from "@/stores/store";

// TODO api store auth;
export const useAuthStore = () => {
   // const store = useAppStore();
    const getState = () => {
        return store.getState().auth;
    };

    const state = useAppSelector((state) => state.auth);

    // Проверка токен;
    const authFetchToken = async () => {
        console.log('authFetchToken');
        const {accessToken, refreshToken} = getState();
        if(accessToken) {
            console.log('accessToken', accessToken);
        }else{
            authLogout();
        }
    };

    // Авторизация;
    const authLogin = async ({ username, password }) => {
        console.log('authLogin',username,password)
        // api;

        authSetToken({
            accessToken: '345dfgdfg34_accessToken',
            refreshToken: 'reterterte_refreshToken',
        })
    };

    // Сохранить store/куки;
    const authSetToken = ({ accessToken, refreshToken }) => {
        //
        store.dispatch(setAuthToken({accessToken, refreshToken}));
    };

    // выйти;
    const authLogout = () => {
        authSetToken({
            accessToken: null,
            refreshToken: null,
        })
    }
    return {
        state,
        getState,
        authFetchToken,
        authLogin,
        authLogout,
    };
}

