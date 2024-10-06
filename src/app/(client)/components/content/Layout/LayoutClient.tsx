"use client"
import React, {PropsWithChildren, useState, Suspense} from 'react';
import {Slot, useSlot} from "@/common/shared/slot";
import { Layout, theme } from 'antd';
import {ChildProps} from "./types";
import Headers from "@/app/(client)/components/content/Header/Headers";
import FooterComponent from "@/app/(client)/components/content/Footer/FooterComponent";
import { ConfigProvider } from 'antd';
import {themeCustom} from "@/app/(client)/components/content/Layout/theme";
import { Hydrate } from 'react-query/hydration'

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const LayoutClient = (props: PropsWithChildren<ChildProps>) => {
    const { Content } = Layout;
    const { children, dehydratedState } = props;
    const queryClientOpt = {
        defaultOptions: {
            queries: {
                suspense: true, //TODO осторожно можеь вызвать бесконечный цикл без Suspense
            },
        }
    }
    const slots = useSlot(children);
    const [queryClient] = React.useState(() => new QueryClient(queryClientOpt));
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                <ConfigProvider theme={themeCustom}>
                    <Layout className={`${props?.classList || ''} `} style={{height: '100%'}}>
                        {/*<Slot name='header'>{slots.header}</Slot>*/}
                        <Headers title={props?.titleHeader || ''}/>
                        <Content className={'layout_container'}>
                            <Suspense fallback={<div>Загрузка...</div>}>
                                {slots.children}
                            </Suspense>
                        </Content>
                        <FooterComponent />
                    </Layout>
                </ConfigProvider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default LayoutClient;
