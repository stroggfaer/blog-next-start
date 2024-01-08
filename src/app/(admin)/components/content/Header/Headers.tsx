import React, { useState, useEffect, PropsWithChildren } from 'react';
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Layout, Button, Avatar} from 'antd';
import {useSlot} from "@/common/shared/slot";
import style from "./style.module.scss";
import { ChildProps } from "./types";
import useAuth from "@/common/hooks/useAuth";

const { Header } = Layout;

const Headers = (props: PropsWithChildren<ChildProps>) => {
    const {header} = style;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const slots = useSlot(props.children);

    useEffect(() => {
        props.onClick(collapsed);
    }, [collapsed]);

    const { logout } = useAuth();

    return (
        <Header style={{ background: props.theme, padding: '0px 24px 0px 0px'}} className={header}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{fontSize: '16px', width: 64, height: 64}}
            />
            <div className={style.title}><h3>{props.title}</h3></div>
            <div className={style.action}>{slots.header}</div>
            <div className={style.user}>
                <Avatar icon={<UserOutlined />} />
                <div className={style.name}>Admin</div>
                <div className={style.logout} onClick={logout}><LogoutOutlined /></div>
            </div>
        </Header>
    );
};

export default Headers;
