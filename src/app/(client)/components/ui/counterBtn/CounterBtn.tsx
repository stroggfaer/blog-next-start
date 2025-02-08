import React from "react";
import { InputNumber } from "antd";
import styles from "./style.module.scss";
import {CounterBtnProps} from "@/app/(client)/components/ui/counterBtn/types.ts";
import {Product} from "@/common/types";
export const CounterBtn: React.FC<CounterBtnProps> = ({ ...props }) => {
    const { quantity } = props.product as Product;
    return (

        <div className={styles.counter_btn}>
            <InputNumber
                max={quantity.max_count}
                step={quantity.step_count}
                defaultValue={quantity.default_count}
                onChange={props.onChange}
            />
        </div>
    );
};
