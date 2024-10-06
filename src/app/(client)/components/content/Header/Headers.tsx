import React, { useState, useEffect, PropsWithChildren } from 'react';
import {
    FileTextOutlined,
    HomeOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Layout, Button, Avatar, Menu, Badge} from 'antd';
import {useSlot} from "@/common/shared/slot";
import styles from "./style.module.scss";
import { ChildProps } from "./types";
import useAuth from "@/common/hooks/useAuth";
import Link from "next/link";
import {IconsSvg} from "@/app/(client)/components/ui/IconsSvg/IconsSvg";
import {colors} from "@/app/(client)/components/content/Layout/theme";

const Headers = (props: PropsWithChildren<ChildProps>) => {
    const slots = useSlot(props.children);
    const { logout } = useAuth();
    const navigationsItems = [
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
    return (
       <div className={'layout_header'}>
          <div className={'layout_container'}>
              <div  className={styles.layout_container_wrap}>
                  <Link  className={styles.logo} href={'/'}><div>Logo</div></Link>
                  <div className={styles.navigation}>
                      {navigationsItems.map((nav, k) => (
                          <Link key={k} className={`link ${styles.active}`}  href={nav.link}>{nav.label}</Link>
                      ))}
                  </div>
                  <div className={styles.block_flex}>
                      <Link href={'/favorites'}>
                          <div className={'favorite'}>
                              <IconsSvg name={'active_favorite'} color={colors.colorPrimary} width={27} height={27} />
                          </div>
                      </Link>
                      <Link href={'/basket'}>
                          <div className={'cart'}>
                              <Badge count={5} color={colors.colorPrimary}>
                                  <IconsSvg name={'cart'} color={colors.colorPrimary} width={27} height={27} />
                              </Badge>
                          </div>
                      </Link>
                  </div>
                  <div className={styles.contacts}>
                      <div className={'phone font_24'}>8 (843) 203-93-43</div>
                      <a href={'#'} className={'link border font_16'}>заказать обратный звонок</a>
                  </div>
              </div>
          </div>
       </div>
    );
};

export default Headers;
