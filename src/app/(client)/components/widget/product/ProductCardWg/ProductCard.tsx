"use client"
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import {IconsSvg} from "@/app/(client)/components/ui/IconsSvg/IconsSvg";
import {colors} from "@/app/(client)/components/content/Layout/theme";
import {BasketAdd} from "@/app/(client)/components/ui/basketAdd/BasketAdd";
import {ProductCardProps} from "@/app/(client)/components/widget/product/types";
import { Image } from 'antd';
import {useBasketStore} from "@/stores/hooks/useBasketStore";
import {BasketParams, Product} from "@/common/types";

export const ProductCard: React.FC<ProductCardProps> = ({ ...props }) => {

    const { setBasket } = useBasketStore();

    const onBasket = (product: Product, counts: number) => {
        setBasket({product, counts});
    }

    const tags = props.product.tags ?? [];

    return (
        <div className={styles.product_card}>
             <div className={styles.product_body}>
                 {tags.map((tag, index) => (
                     <div key={index} className={styles.leader_badge}>{tag}</div>
                 ))}

                 <div className={`${styles.favorite} `}>
                     <IconsSvg name={'favorite'} color={colors.colorPrimary} width={27} height={27} />
                 </div>

                 <Link className={styles.images} href={`/product/${props.product.id}`}>
                     <Image
                         preview={false}
                         src={props.product.image_url}
                         alt={props.product.title}
                     />
                 </Link>

                 <Link className={styles.images} href={`/product/${props.product.id}`}><h3>{props.product.title}</h3></Link>

                 <div className={styles.tags}>
                     <div className={styles.tag}>Кол-во: - {props.product.specifications.quantity_per_pallet} </div>
                     <div className={styles.tag}>Формат: {props.product.specifications.format}</div>
                 </div>

                 <div className={styles.block}>
                     <div className={`text-grey link border`}>{props.product.delivery.is_free ? 'бесплатная доставка' : 'платная доставка'}</div>
                     <div className={`text-green link border`}>{props.product.delivery.availability}</div>
                 </div>
             </div>
             <div className={styles.product_footer}>
                <div className={styles.price}>{props.product.price.value} {props.product.price.currency} / {props.product.price.unit}</div>
                <BasketAdd
                    product={props.product}
                    onBasket={(event, counts) => onBasket(event, counts)}
                />
             </div>
        </div>
    );
};
