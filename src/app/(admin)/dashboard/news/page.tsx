import {Metadata} from "next";
import {News} from "@/app/(admin)/components/widgets/News";


// SSR;
export const metadata: Metadata = {
    title: 'News',
    description: '',
}
const dataFetch = [] as any[];

const NewsPage = () => {
    return (
       <><News data={dataFetch} /></>
    );
};

export default NewsPage;
