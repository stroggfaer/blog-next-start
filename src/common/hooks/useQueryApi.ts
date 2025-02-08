import { useQuery, UseQueryOptions } from 'react-query';
import { getProductById, getProducts } from "@/common/api/publicApi";
import { Product } from "@/common/types";

export function useProducts() {

    const {
        data: products,
        error: productsError,
        isLoading: productsLoading,
    } = useQuery<Product[], Error>({
        queryKey: ['productsList'],
        queryFn: getProducts,
    });
    const productsList = products ? products as Product[] : [];

    return {
        productsList,
        productsError,
        productsLoading
    };
}

export function useProduct(
    slug: string | undefined,
    opt?: Omit<UseQueryOptions<Product, Error>, 'queryKey' | 'queryFn' | 'enabled'>
) {
    const { data, error, isLoading } = useQuery<Product, Error>({
        queryKey: ['productDetail', slug],
        queryFn: () => getProductById(slug),
        select: (data) => data, // можно трасформировать
        ...opt,
    });

    return {
        product: data as Product | null,
        productError: error as Error | null | undefined,
        productLoading: isLoading as boolean,
    };
}

