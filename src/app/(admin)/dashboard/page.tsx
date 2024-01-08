import {Metadata} from "next";
import Dashboard from "@/app/(admin)/components/widgets/Dashboard";

// SSR;
export const metadata: Metadata = {
    title: 'Dashboard',
    description: '',
}
const dataFetch = [];

export default function DashboardPage() {
  return (
   <><Dashboard dataFetch={dataFetch} /></>
  )
}
