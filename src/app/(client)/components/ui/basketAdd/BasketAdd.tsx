import React from "react";
import { Button } from "antd";
import styles from "./style.module.scss";

export const BasketAdd: React.FC<BasketAddProps> = ({ ...props }) => {
    return (
        <div className={'basketAdd'}>
            <Button type="primary" disabled={props.disabled} loading={props.btnLoading} onClick={props.onBasket}>Добавить в корзину</Button>
        </div>
    );
};
