'use client'
import React from 'react';
import LayoutAdmin from "@/app/(admin)/components/content/Layout/LayoutAdmin";
import { DashboardType } from "@/app/(admin)/dashboard/page";

interface DashboardProps {
    data: DashboardType[];
}

const Dashboard: React.FC<DashboardProps> = ({data}) => {
    console.log(data);
    if (!data || data.length === 0) {
        return (
            <LayoutAdmin titleHeader="Dashboard">
                <p>No data available</p>
            </LayoutAdmin>
        );
    }
    return (
        <LayoutAdmin titleHeader="Dashboard">
            Dashboard <br/>
            {data[0]?.id ?? 'No ID available'}
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </LayoutAdmin>
    );
};

export default Dashboard;
