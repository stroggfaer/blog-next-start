export interface Product {
    id: number;
    title: string;
    image_url: string;
    tags: string[];
    description: string;
    specifications: {
        quantity_per_pallet: number;
        format: string;
    };
    delivery: {
        is_free: boolean;
        availability: string;
    };
    price: PriceType;
    quantity: QuantityType;
}
export interface ProductBasket extends Product {
    key: any;
    total: number;
}
export interface QuantityType {
    min_count: number,
    max_count: number,
    counts: number,
    step_count: number,
    default_count: number
}
export interface PriceType {
    value: number;
    currency: string;
    unit: string;
}