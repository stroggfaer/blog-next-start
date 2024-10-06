import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {TitleUi} from "@/app/(client)/components/ui/title";
// SSR;
export const metadata: Metadata = {
    title: 'Продукты',
    description: '...продукты',
}
const dataFetch = [] as any[];

const ProductListPage = () => {
    return (
        <LayoutClient>
            <div className={'content__com'}>
                <div className={'content__wrap'}>
                    <p>ProductListPage</p>
                </div>
            </div>
        </LayoutClient>
    );
};

export default ProductListPage;
