import {Metadata} from "next";
import {NewsView} from "@/app/(admin)/components/widgets/News";


// SSR;
export const metadata: Metadata = {
    title: 'News Details ',
    description: '',
}
const view = {
    title: 'Test NewsView'
};

const NewsDetails = () => {
    return (
       <><NewsView dataView={view} /></>
    );
};

export default NewsDetails;
