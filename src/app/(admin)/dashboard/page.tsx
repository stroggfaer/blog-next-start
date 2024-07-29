import {Metadata} from "next";
import Dashboard from "@/app/(admin)/components/widgets/Dashboard";

// SSR;
export const metadata: Metadata = {
    title: 'Dashboard',
    description: '',
}
export interface DashboardType {
    id: number;
    title: string;
}
const dataFetch = [
    {
        id: 1001,
        title: 'DashboardProps Test'
    },
    {
        id: 1002,
        title: 'Test'
    }

] as DashboardType[];

export default function DashboardPage() {
  return (
   <><Dashboard data={dataFetch} /></>
  )
}
