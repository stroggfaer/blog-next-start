import {Layout} from "antd";

const { Footer: Footer } = Layout;import React from 'react';

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    );
};

export default FooterComponent;
