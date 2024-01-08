import {Metadata} from "next";
import {Users} from "@/app/(admin)/components/widgets/Users";

// SSR;
export const metadata: Metadata = {
    title: 'Users',
    description: '',
}
const dataFetch = [];

const UsersPage = () => {
    return (
       <><Users dataFetch={dataFetch} /></>
    );
};

export default UsersPage;
