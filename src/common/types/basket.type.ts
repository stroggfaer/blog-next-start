import {Product, ProductBasket} from "@/common/types/products.type.ts";
export interface Basket {
    total: number,
    productsCounts: number
    products: ProductBasket[]
}
export interface BasketParams {
    counts: number,
    product: Product
}

export type ActionBasketType = "add" | "update" | "delete";