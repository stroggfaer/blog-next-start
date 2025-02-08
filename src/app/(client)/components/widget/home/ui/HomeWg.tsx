"use client"
import React from "react";
import styles from "./style.module.scss";
import {ProductCard} from "@/app/(client)/components/widget/product";
import {useProducts} from "@/common/hooks/useQueryApi";
import Loading from "@/app/(admin)/loading.tsx";
import {useBasketStore} from "@/stores/hooks/useBasketStore.ts";

export const HomeWg: React.FC<HomeWgProps> = ({ ...props }) => {
  //  const cards = Array.from({ length: 20 });
    const { productsList, productsLoading, productsError } = useProducts()
    const { state } = useBasketStore();

    return (
        <div className={styles.home_content}>
            <h2>Спецпредложения</h2>
            <div className={'product_list__com'}>
                {!productsLoading && productsList?.length ? productsList?.map((product, key) => (
                    <ProductCard key={key} product={product} />
                )) : productsLoading ? Loading() : ''}
            </div>
        </div>
    );
};
