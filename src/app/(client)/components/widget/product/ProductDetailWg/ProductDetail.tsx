"use client"
import React from "react";
import styles from "./style.module.scss";
import {BasketAdd} from "@/app/(client)/components/ui/basketAdd/BasketAdd";
import {ProductDetailProps} from "@/app/(client)/components/widget/product/types";
import {useProduct} from "@/common/hooks/useQueryApi";
import {useBasketStore} from "@/stores/hooks/useBasketStore";
import {Product} from "@/common/types";

export const ProductDetail: React.FC<ProductDetailProps> = ({ ...props }) => {
    const {product, productLoading, productError } = useProduct(
        props.slug,
        {
            initialData: props.initialProduct  || undefined
        });
    const { setBasket } = useBasketStore();
    const onBasket = (product: Product, counts: number) => {
        setBasket({product, counts});
    }

    // Обработка ошибки;
    if (productLoading) return <div>Загрузка...</div>;
    if (productError) return <div>Ошибка: {productError.message}</div>;
    if (!product) return <div>Продукт не найден</div>;

    return (
       <div className={styles.product_detail}>

           <div className={styles.image}>
               <img src={product.image_url} alt={product.title} className={'img_full'} />
           </div>
           <div className={styles.detail}>
               <h1 className={'title_h1'}>{product.title}</h1>

               <div className={styles.tags}>
                   <div className={styles.tag}>Кол-во {product.specifications.quantity_per_pallet} </div>
                   <div className={styles.tag}>Формат: {product.specifications.format}</div>
               </div>

               <div className={styles.block}>
                   <div className={`text-grey link border`}>{product.delivery.is_free ? 'бесплатная доставка' : 'платная доставка'}</div>
                   <div className={`text-green link border`}>{product.delivery.availability}</div>
               </div>

               <div className={styles.price}>{product.price.value} {product.price.currency} / {product.price.unit}</div>

               <BasketAdd
                   product={product}
                   onBasket={(event, counts) => onBasket(event, counts)}
               />

               <div className={styles.info}>
                   <h3>Описание</h3>
                   <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }} />
               </div>
           </div>
       </div>
    );
};
