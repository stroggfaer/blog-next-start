import React from "react";
import styles from "./style.module.scss";

export const TitleUi: React.FC<TitleUiProps> = ({ ...props }) => {
    return (
        <div className={styles.title__ui}>
           <div className={styles.title__wrap}>
               <h1 className={'title_h1'}>{props.title ?? ''}</h1>
               <span className="count">
                 {props.count ?? ''}
               </span>
           </div>
        </div>
    );
};
