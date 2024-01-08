import {Metadata} from "next";
import {News} from "@/app/(admin)/components/widgets/News";


// SSR;
export const metadata: Metadata = {
    title: 'News',
    description: '',
}
const dataFetch = [];

const NewsPage = () => {
    return (
       <><News dataFetch={dataFetch} /></>
    );
};

export default NewsPage;
