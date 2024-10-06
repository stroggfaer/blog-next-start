import type { ThemeConfig } from 'antd';

export const colors = {
    colorPrimary: '#5661CB',
    colorSuccess: '#27AE60',
    colorError: '#D41A36',
    colorWarning: '#F2994A'
}

export const themeCustom: ThemeConfig = {
    token: {
        colorLink: colors.colorPrimary,
        colorBgLayout: '#ffffff',
        fontSize: 16,
        fontFamily: 'Roboto',
        colorPrimary: colors.colorPrimary
    }
};
