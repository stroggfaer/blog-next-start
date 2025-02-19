import {Product} from "@/common/types";
// Получить все продукты
import {api} from "@/common/config/axios.config";
import { AxiosResponse } from 'axios';

// export const getProducts = async (): Promise<Product[]> => {
//
//     const response = await api.get('/products'); // api.get<Partial<Product[]>>('/products');
//     return response.data;
// };
export const getProducts = async (): Promise<Product[]> => {
    try {
        const response: AxiosResponse<Product[]>  = await api.get('/products');
        return response.data;
    }catch (e) {
        console.log('getProducts error', e);
        throw Error;
    }
};

// Получить продукт по ID
export const getProductById = async (id: string | undefined):Promise<Product | null> => {
    try {
        const response: AxiosResponse<Product>  = await api.get(`/products/${id}`);
        return response.data as Product | null;
    } catch (e) {
        throw Error;
    }
};
