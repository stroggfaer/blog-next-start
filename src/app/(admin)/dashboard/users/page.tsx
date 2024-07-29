import {Metadata} from "next";
import {Users} from "@/app/(admin)/components/widgets/Users";

// SSR;
export const metadata: Metadata = {
    title: 'Users',
    description: '',
}
const dataFetch = [] as any[];

const UsersPage = () => {
    return (
       <><Users data={dataFetch} /></>
    );
};

export default UsersPage;
