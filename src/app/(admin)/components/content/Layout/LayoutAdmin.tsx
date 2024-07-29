"use client"
import React, {PropsWithChildren, useState, Suspense} from 'react';
import {Slot, useSlot} from "@/common/shared/slot";
import { Layout, theme } from 'antd';
import Sidebar from "@/app/(admin)/components/content/Sidebar/Sidebar";
import Headers from "@/app/(admin)/components/content/Header/Headers";
import {ChildProps} from "./types";
import Loading from "@/app/(admin)/loading";
import style from "./style.module.scss";

const LayoutAdmin = (props: PropsWithChildren<ChildProps>) => {
    const { Content } = Layout;
    //const {children, classList, titleHeader } = props;
    const slots = useSlot(props.children);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { token: { colorBgContainer, borderRadiusLG },} = theme.useToken();

    return (
        <Layout className={`${props?.classList || ''} `} style={{height: '100%', flexDirection: 'row'}}>
                <Sidebar collapsed={collapsed}/>
                <Suspense fallback={<Loading />}>
                    <Layout>
                        <Headers theme={colorBgContainer} onClick={setCollapsed} title={props?.titleHeader || ''}>
                            <Slot name='header'>{slots.header}</Slot>
                        </Headers>
                        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG}}>
                            {slots.children}
                        </Content>

                    </Layout>
                </Suspense>
            </Layout>
    );
};

export default LayoutAdmin;
