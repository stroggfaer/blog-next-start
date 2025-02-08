import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import {FileTextOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import { usePathname } from 'next/navigation';
import { NavigationProps, NavigationItem } from "@/app/(client)/components/widget/navigation/types";

const navigationsItems: NavigationItem[] = [
    {
        link: '/services',
        icon: <HomeOutlined />,
        label: 'Услуги',
    },
    {
        link: '/delivery',
        icon: <UserOutlined />,
        label: 'Доставка',
    },
    {
        link: '/payment',
        icon: <FileTextOutlined />,
        label: 'Оплата',
    },
    {
        link: '/projects',
        icon: <FileTextOutlined />,
        label: 'Проекты',
    },
];

export const Navigation: React.FC<NavigationProps> = ({ ...props }) => {
    const pathname = usePathname();
    return (
        <div className={styles.navigation}>
            {navigationsItems.map((nav, k) => (
                <Link key={k} className={`link ${pathname === nav.link ? styles.active : ''}`}  href={nav.link}>{nav.label}</Link>
            ))}
        </div>
    );
};
