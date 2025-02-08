import {Product} from "@/common/types";
export interface CounterBtnProps {
    btnLoading?: boolean;
    disabled?: boolean;
    onChange?: (value: any) => void;
    record?: any;
    product: Product;
}

