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
    price: {
        value: number;
        currency: string;
        unit: string;
    };
}
