"use client"
import React from "react";
import styles from "./style.module.scss";
import {Button, Table, Image} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

export const BasketWg: React.FC<BasketWgProps> = ({ ...props }) => {
    const onBasketRemove = (val: any) => {
      console.log('onBasketRemove',val);
    }
    const onSubmit = () => {
        console.log('onSubmit');
    }
    interface DataType {
        key?: number;
        title?: string;
        age?: number;
        address?: string;
    }

    const columns = [
        {
            title: '',
            dataIndex: 'img',
            key: 'img',
            width: 65,
            render: (text: string, record: any, index: number) => {
                return ( <Image
                    width={60}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />)
            },
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, record: any, index: number) => {
                return text;
            },
        },
        {
            title: 'Количество',
            dataIndex: 'count',
            key: 'count',
            render: (text: string, record: any, index: number) => {
                return text;
            },
        },
        {
            title: 'Цена за шт.',
            dataIndex: 'price',
            key: 'price',
            render: (text: string, record: any, index: number) => {
                return text;
            },
        },
        {
            title: 'Всего',
            dataIndex: 'total',
            key: 'total',
            render: (text: string, record: any, index: number) => {
                return text;
            },
        },
        {
            title: () => ('Удалить'),
            width: 80,
            align: 'center',
            dataIndex: 'action',
            key: 'action',
            render: (text: string, record: any, index: number) => {
                return ( <Button type="link" onClick={onBasketRemove} icon={<DeleteOutlined />}  />)
            },
        },
    ] as any[];

    const data: DataType[] = [
        {
            key: 1,
            title: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: 2,
            title: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: 3,
            title: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
    ];
    return (
       <div className={styles.basket_wg}>
           <Table columns={columns} dataSource={data} pagination={false} size={"small"} bordered={true} />
           <div className={styles.action}>
               <Button className={styles.checkoutBtn} type="primary" disabled={false} loading={false} onClick={onSubmit} size={"large"}>Оформить</Button>
           </div>

       </div>
    );
};
