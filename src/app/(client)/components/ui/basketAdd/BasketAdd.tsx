"use client"
import React from "react";
import { Button } from "antd";
import styles from "./style.module.scss";
import {BasketAddProps} from "@/app/(client)/components/ui/basketAdd/types";
import {CounterBtn} from "@/app/(client)/components/ui/counterBtn/CounterBtn.tsx";
import {useBasketStore} from "@/stores/hooks/useBasketStore.ts";
//
export const BasketAdd: React.FC<BasketAddProps> = ({ ...props }) => {
    const { getBasketFind } = useBasketStore();
    const isBasket = getBasketFind(props.product.id);
    return (
        <div className={'basketBtn'}>
            {!isBasket ? (
                <div className={'basketAdd'}>
                    <Button type="primary" disabled={props?.disabled} loading={props?.btnLoading}
                            onClick={(event: any) => {
                                if (props.onBasket) props.onBasket(props.product, props.product.quantity.default_count);
                            }}
                    >
                        Добавить в корзину
                    </Button>
                </div>
            ) : (
                <div className={'basketEdit'}>
                    <CounterBtn
                        product={props.product}
                        onChange={(event: any) => {
                            if (props.onBasket) props.onBasket(props.product, event);
                        }}
                    ></CounterBtn>
                </div>
            )}
        </div>
    );
};
