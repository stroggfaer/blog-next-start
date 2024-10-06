import React from 'react';
import styles from "./style.module.scss";
interface IconsSvgProps {
    name?: string;
    className?: string;
    height?: string | number;
    width?: string | number;
    strokeWidth?: number;
    color?: string;
}

export const IconsSvg: React.FC<IconsSvgProps> = ({
                                                      name = '',
                                                      className = styles.icons__com,
                                                      height = '24px',
                                                      width = '24px',
                                                      strokeWidth = 2,
                                                      color = '#808594',
                                                  }) => {
    return (
        <>
            <div className={className}>
                {name === 'arrow' && (
                    <svg
                        className={className}
                        width={width}
                        height={height}
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 9.5L11.1962 0.5H0.803848L6 9.5Z" fill={color || '#000'} />
                    </svg>
                )}
                {name === 'favorite' && (
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.83654 25.0594C4.70492 25.8086 5.44404 26.3942 6.09542 26.06L13.5035 22.253L20.91 26.06C21.5614 26.3942 22.3005 25.8086 22.1689 25.061L20.7682 17.0792L26.7133 11.4159C27.2685 10.886 26.9799 9.91741 26.2357 9.81279L17.9704 8.63829L14.2849 1.33648C14.2146 1.18846 14.1039 1.06341 13.9654 0.975845C13.827 0.88828 13.6665 0.841797 13.5027 0.841797C13.3389 0.841797 13.1784 0.88828 13.04 0.975845C12.9015 1.06341 12.7908 1.18846 12.7205 1.33648L9.03504 8.63998L0.769669 9.81448C0.0254816 9.9191 -0.263081 10.8877 0.292107 11.4176L6.23717 17.0809L4.83654 25.0627V25.0594ZM13.1137 20.39L6.89361 23.5862L8.06473 16.9087C8.09217 16.755 8.08143 16.5969 8.03347 16.4483C7.98551 16.2997 7.90179 16.1652 7.78967 16.0565L2.88579 11.3822L9.72354 10.4102C9.86513 10.3888 9.99943 10.3334 10.1149 10.2488C10.2304 10.1641 10.3237 10.0527 10.3867 9.92416L13.5035 3.75129L16.6187 9.92416C16.6817 10.0527 16.775 10.1641 16.8905 10.2488C17.006 10.3334 17.1403 10.3888 17.2819 10.4102L24.1196 11.3805L19.2157 16.0549C19.1032 16.1636 19.0193 16.2984 18.9713 16.4473C18.9233 16.5963 18.9128 16.7548 18.9407 16.9087L20.1118 23.5862L13.8917 20.39C13.7714 20.328 13.638 20.2957 13.5027 20.2957C13.3674 20.2957 13.234 20.328 13.1137 20.39Z"
                            fill={color || '#000'}
                        />
                    </svg>
                )}
                {name === 'active_favorite' && (
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6.0953 26.0599C5.44392 26.3941 4.7048 25.8085 4.83642 25.0609L6.23705 17.0791L0.291984 11.4158C-0.263203 10.8859 0.0253595 9.9173 0.769547 9.81268L9.03492 8.63818L12.7204 1.33637C13.0529 0.678242 13.9523 0.678242 14.2847 1.33637L17.9702 8.63818L26.2356 9.81268C26.9798 9.9173 27.2684 10.8859 26.7132 11.4158L20.7681 17.0791L22.1687 25.0609C22.3004 25.8085 21.5612 26.3941 20.9099 26.0599L13.5 22.2529L6.09361 26.0599H6.0953Z" fill={color || '#000'} />
                    </svg>
                )}

                {name === 'cart' && (
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.54239 27.0003C10.658 27.0003 11.5623 26.076 11.5623 24.9357C11.5623 23.7955 10.658 22.8711 9.54239 22.8711C8.42681 22.8711 7.52246 23.7955 7.52246 24.9357C7.52246 26.076 8.42681 27.0003 9.54239 27.0003Z"  fill={color || '#000'}/>
                        <path d="M21.8148 27.0003C22.9304 27.0003 23.8348 26.076 23.8348 24.9357C23.8348 23.7955 22.9304 22.8711 21.8148 22.8711C20.6993 22.8711 19.7949 23.7955 19.7949 24.9357C19.7949 26.076 20.6993 27.0003 21.8148 27.0003Z"  fill={color || '#000'}/>
                        <path d="M27 4.17577C26.9219 4.0064 26.8818 3.3246 26.88 3.15364C26.8818 2.98268 26.9219 2.81195 27 2.64258H8L9 4.17577H18H27Z"  fill={color || '#000'}/>
                        <path d="M24.5078 10.0242H24.1307L23.0086 15.0711H9.5424L5.43971 1.79329C5.39533 1.6524 5.31827 1.52457 5.21509 1.42071C5.11192 1.31685 4.9857 1.24004 4.8472 1.19684L1.16644 0.0406531C1.05327 0.00510494 0.934346 -0.00730978 0.816474 0.00411763C0.698603 0.015545 0.584087 0.0505909 0.479466 0.107254C0.268175 0.221691 0.110013 0.417233 0.0397743 0.650863C-0.0304642 0.884494 -0.00702567 1.13707 0.104934 1.35304C0.216893 1.56901 0.408202 1.73067 0.636774 1.80246L3.85968 2.81183L7.98032 16.1172L6.50802 17.3468L6.39131 17.466C6.02713 17.895 5.82071 18.4404 5.8076 19.0082C5.79449 19.576 5.97552 20.1307 6.31949 20.5767C6.56418 20.8809 6.87512 21.1223 7.22742 21.2816C7.57972 21.441 7.96362 21.5138 8.3484 21.4943H23.3317C23.5698 21.4943 23.7982 21.3977 23.9665 21.2256C24.1349 21.0535 24.2295 20.8201 24.2295 20.5767C24.2295 20.3334 24.1349 20.1 23.9665 19.9279C23.7982 19.7558 23.5698 19.6591 23.3317 19.6591H8.20476C8.10138 19.6555 8.00066 19.6247 7.91233 19.5697C7.82399 19.5147 7.75103 19.4373 7.70049 19.3451C7.64995 19.2528 7.62354 19.1488 7.62381 19.0431C7.62407 18.9374 7.65101 18.8335 7.70202 18.7415L9.86558 16.9063H23.7268C23.9343 16.9115 24.1371 16.843 24.3008 16.7125C24.4645 16.582 24.5789 16.3976 24.6245 16.1906L26.034 9.84989C25.5334 9.96723 25.0213 10.0257 24.5078 10.0242Z"  fill={color || '#000'}/>
                    </svg>
                )}
            </div>
        </>
    );
};
