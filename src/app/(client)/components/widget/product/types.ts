import {Product} from "@/common/types";

export interface ProductCardProps {
    product: Product
}
export interface ProductListProps {
    title?: string,
    count?: number
}

export interface ProductDetailProps {
    title?: string,
    count?: number
    initialProduct?: Product;
    slug: any,
}

