import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
const baseURL = process.env.PUBLIC_API || '';
console.log('baseURL PUBLIC_API', baseURL);
const api = axios.create();

api.defaults.baseURL = baseURL;

// Добавить обработчики для обработки ошибок или авторизации (опционально)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Обработка ошибок, если нужно
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) =>  {
        handleError(+error.response?.status, error.response?.data);
        return Promise.reject(error);
    }
);

/* вывод ошибки*/
const handleError = (errorCode: any, errorData: any) => {
    if (errorData?.message) {

    } else if (Array.isArray(errorData)) {

    } else {

    }
};
// Может быть несколько эндпоинтов;
export {api};
