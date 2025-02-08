"use client"
import React, { useState, useEffect, PropsWithChildren } from 'react';
import {
    FileTextOutlined,
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Badge} from 'antd';
import { useRouter } from 'next/router';
import {useSlot} from "@/common/shared/slot";
import styles from "./style.module.scss";
import { ChildProps } from "./types";
import useAuth from "@/common/hooks/useAuth";
import Link from "next/link";
import {IconsSvg} from "@/app/(client)/components/ui/IconsSvg/IconsSvg";
import {colors} from "@/app/(client)/components/content/Layout/theme";
import {Navigation} from "@/app/(client)/components/widget/navigation/Navigation";
import {useBasketStore} from "@/stores/hooks/useBasketStore.ts";

const Headers = (props: PropsWithChildren<ChildProps>) => {
    const slots = useSlot(props.children);
    const { logout } = useAuth();
    const { state } = useBasketStore();
    return (
       <div className={'layout_header'}>
          <div className={'layout_container'}>
              <div  className={styles.layout_container_wrap}>
                  <Link  className={styles.logo} href={'/'}><div>Logo</div></Link>
                  <Navigation />
                  <div className={styles.block_flex}>
                      <Link href={'/favorites'}>
                          <div className={'favorite'}>
                              <IconsSvg name={'active_favorite'} color={colors.colorPrimary} width={27} height={27} />
                          </div>
                      </Link>
                      <Link href={'/basket'}>
                          <div className={'cart'}>
                              <Badge count={state.basket.productsCounts} color={colors.colorPrimary} showZero>
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
