import React from 'react';
import LayoutAdmin from "@/app/(admin)/components/content/Layout/LayoutAdmin";
import {Slot} from "@/common/shared/slot";
interface NewsViewProps {
    dataView: any;
}
const NewsView: React.FC<NewsViewProps> = ({ dataView }) => {
    return (
        <LayoutAdmin titleHeader="News View: New 1">
            NewsView

            <pre>
                {JSON.stringify(dataView)}
            </pre>

        </LayoutAdmin>
    );
};

export default NewsView;
