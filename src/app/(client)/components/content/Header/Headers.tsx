import React, { useState, useEffect, PropsWithChildren } from 'react';
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Layout, Button, Avatar, Menu} from 'antd';
import {useSlot} from "@/common/shared/slot";
import style from "./style.module.scss";
import { ChildProps } from "./types";
import useAuth from "@/common/hooks/useAuth";

const { Header } = Layout;

const Headers = (props: PropsWithChildren<ChildProps>) => {
    const {header} = style;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const slots = useSlot(props.children);

    const items = new Array(4).fill(null).map((_, index) => ({
        key: index + 1,
        label: `nav ${index + 1}`,
    }));

    useEffect(() => {
        props.onClick(collapsed);
    }, [collapsed]);

    const { logout } = useAuth();

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    );
};

export default Headers;
