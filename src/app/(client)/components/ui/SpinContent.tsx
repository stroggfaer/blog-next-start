import React from 'react';
import { Flex, Spin } from 'antd';

export function SpinContent() {
    const contentStyle: React.CSSProperties = {
        padding: 50,
        width: '100%',
        height: '100%',
        marginTop: 15,
        marginBottom: 15
    };
    return (
    <>
        <Flex gap="middle" vertical justify={'center'} align={'center'} style={contentStyle}>
            <Spin tip="Загрузка..." size="large" fullscreen={true}></Spin>
        </Flex>
    </>
    )
}
