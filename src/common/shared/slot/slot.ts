import React, {ReactElement} from 'react';
import {SlotProps} from "@/common/shared/slot/types";

function Slot(_: SlotProps): ReactElement {
    return null as unknown as ReactElement;
}

Slot.getSlot = function* getCollectionNode(props: SlotProps): any {
    yield props.children;
};
Slot.displayName = 'Slot';

let _Slot = Slot as (props: SlotProps) => JSX.Element;

export default _Slot;
