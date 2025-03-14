import {Product} from "@/common/types";
export interface BasketAddProps {
    btnLoading?: boolean;
    disabled?: boolean;
    onBasket?: (event: any, counts: number) => void;
    onChange?: (event: any) => void;
    record?: any;
    product: Product;
}

