import {Metadata} from "next";
import { UserView } from "@/app/(admin)/components/widgets/Users";

// SSR;
export const metadata: Metadata = {
    title: 'User View',
    description: '',
}
const view = {} as any;

const UsersDetails = () => {
    return (
       <><UserView view={view}  /></>
    );
};

export default UsersDetails;
