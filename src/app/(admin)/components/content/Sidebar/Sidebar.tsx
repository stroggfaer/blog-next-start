import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
    UserOutlined,
    HomeOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation'
import style from "./style.module.scss"

const { Sider  } = Layout;
const Sidebar = (props: any) => {
    const navigationsItems = [
        {
            key: '/dashboard',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: '/dashboard/users',
            icon: <UserOutlined />,
            label: 'Users',
        },
        {
            key: '/dashboard/news',
            icon: <FileTextOutlined />,
            label: 'News',
        },
    ];
    const router = useRouter();
    const pathname = usePathname();
    const [routName, setRoutName] = useState<string>(pathname);

    const onClick: MenuProps['onClick'] = (e) => {
        router.push(`${e.key}`);
    };

    useLayoutEffect(()=>{}, []);

    useEffect(() => {}, []);

    const routFind = (): string => {
        let selectedNavItem;
        for (const item of navigationsItems) {
            if (pathname.startsWith(item.key) && (!selectedNavItem || item.key.length > selectedNavItem?.key?.length)) selectedNavItem = item;
        }
        return selectedNavItem?.key || '';
    }

    const navName = routFind();

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed || false}>
            <div className={style.logo_header}>Admin Panel</div>
            <Menu
                theme="dark"
                mode="inline"
                onClick={onClick}
                selectedKeys={[navName]}
                items={navigationsItems}
            />
        </Sider>
    );
};

export default Sidebar;
