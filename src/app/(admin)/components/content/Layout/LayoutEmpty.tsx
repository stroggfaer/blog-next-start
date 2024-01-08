// Создание контекста аналог slot;
import React from 'react';
import { useSlot } from "@/common/shared/slot";
const LayoutEmpty = (props: any) => {
    const {children, classList, title } = props;
    const slots = useSlot(children);
    return (
        <div className={`empty_layout ${classList}`}>
            {/*<div>slots: {slots.content}</div>*/}
            <div className={'box'}>{slots.children}</div>
        </div>
    );
};

export default LayoutEmpty;
