import React, { ReactNode, ReactElement, isValidElement, Children } from 'react';
// Аналог slot как на vue.js use Client
export function useSlot(children: ReactNode): Record<string, any> {
    const result: Record<string, any> = {
        children: [],
    };
    Children.forEach(children, (child: ReactNode) => {
        if (isValidElement(child)) {
            const { type, props } = child as ReactElement<any, React.JSXElementConstructor<any>>;
            const { displayName } = type as any;
            if (displayName === 'Slot') {
                const slotValue = (type as any).getSlot(props);
                result[props.name] = slotValue.next().value;
            } else {
                result.children.push(child);
            }
        } else {
            result.children.push(child);
        }
    });

    return result;
}
