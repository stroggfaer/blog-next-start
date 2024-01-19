"use client"
import React, {PropsWithChildren, useState, Suspense} from 'react';
import {Slot, useSlot} from "@/common/shared/slot";
import { Layout, theme } from 'antd';
import {ChildProps} from "./types";
import style from "./style.module.scss";
import Headers from "@/app/(client)/components/content/Header/Headers";
const LayoutClient = (props: PropsWithChildren<ChildProps>) => {
    const { Content, Footer } = Layout;
    //const {children, classList, titleHeader } = props;
    const slots = useSlot(props.children);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

    return (
        <Layout className={`${props?.classList || ''} `} style={{height: '100%'}}>
            {/*<Slot name='header'>{slots.header}</Slot>*/}
            <Headers theme={colorBgContainer} onClick={setCollapsed} title={props?.titleHeader}/>
            <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG}}>
                {slots.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default LayoutClient;
