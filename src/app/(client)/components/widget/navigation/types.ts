import { ReactNode } from 'react';
export interface NavigationProps {
    navigation?: NavigationItem[]
}
export interface NavigationItem {
    link: string;
    icon: ReactNode;
    label: string;
}
