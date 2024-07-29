'use client'
import React from 'react';
import LayoutAdmin from "@/app/(admin)/components/content/Layout/LayoutAdmin";
import {Slot} from "@/common/shared/slot";

interface NewsProps {
    data: any[];
}
//const NewsView: React.FC<NewsViewProps> = ({ dataView }) => {
const News: React.FC<NewsProps> = ({ data }) => {
    return (
        <LayoutAdmin titleHeader="News">
            <Slot name="header"></Slot>
            ___News____
            {JSON.stringify(data)}
        </LayoutAdmin>
    );
};

export default News;
