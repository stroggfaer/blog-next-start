"use client"
import React from "react";
import styles from "./style.module.scss";
import {Button, Table, Image} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {useBasketStore} from "@/stores/hooks/useBasketStore.ts";
import {PriceType, Product, ProductBasket, QuantityType} from "@/common/types";
import {BasketAdd} from "@/app/(client)/components/ui/basketAdd/BasketAdd.tsx";
import Link from "next/link";

export const BasketWg: React.FC<BasketWgProps> = ({ ...props }) => {

    const { getState, setBasket, removeBasket } = useBasketStore();

    const { basket } = getState();

    const onBasketRemove = (product: ProductBasket) => {
        removeBasket(product);
    }
    const onSubmit = () => {
        console.log('onSubmit');
    }

    const columns = [
        {
            title: '',
            dataIndex: 'image_url',
            key: 'image_url',
            width: 65,
            render: (img: string, product: ProductBasket, index: number) => {
                return ( <Image
                    key={index}
                    width={60}
                    src={img}
                />)
            },
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, product: ProductBasket, index: number) => {
                return ( <Link href={`/product/${product.id}`}>{text}</Link>);
            },
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity: QuantityType, product: ProductBasket, index: number) => {
                return (<BasketAdd
                    key={index}
                    product={product}
                    onBasket={(event, counts) => onBasket(event, counts)}
                />)
            },
        },
        {
            title: 'Цена за шт.',
            dataIndex: 'price',
            key: 'price',
            render: (price: PriceType, product: ProductBasket, index: number) => {
                return `${price.value} ${price.currency}`;
            },
        },
        {
            title: 'Всего',
            dataIndex: 'total',
            key: 'total',
            render: (total: number, product: ProductBasket, index: number) => {
                return `${total} ${product.price.currency}`;
            },
        },
        {
            title: () => ('Удалить'),
            width: 80,
            align: 'center',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, product: ProductBasket, index: number) => {
                return ( <Button type="link" onClick={() => onBasketRemove(product)} icon={<DeleteOutlined />}  />)
            },
        },
    ] as any[];

    const productData: ProductBasket[] = basket.products;

    const onBasket = (product: ProductBasket, counts: number) => {
        setBasket({product, counts});
    }

    return (
        <div className={styles.basket_wg}>
            <Table columns={columns} dataSource={productData} pagination={false} size={"small"} bordered={true}/>
            <div className={styles.total}><b>Всего:</b> {basket.total} ₽</div>
            <div className={styles.action}>
                <Button className={styles.checkoutBtn} type="primary" disabled={!Boolean(productData.length)} loading={false}
                        onClick={onSubmit} size={"large"}>Оформить</Button>
            </div>

        </div>
    );
};
