'use client'
import React from 'react';
import LayoutAdmin from "@/app/(admin)/components/content/Layout/LayoutAdmin";
import {Slot} from "@/common/shared/slot";

const Users = () => {
    return (
        <LayoutAdmin titleHeader="Users">
            <Slot name="header"></Slot>
            Users
        </LayoutAdmin>
    );
};

export default Users;
