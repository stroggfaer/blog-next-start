import {Metadata} from "next";
import { UserView } from "@/app/(admin)/components/widgets/Users";

// SSR;
export const metadata: Metadata = {
    title: 'User View',
    description: '',
}
const view = {};

const UsersDetails = () => {
    return (
       <><UserView dataView={view}  /></>
    );
};

export default UsersDetails;
