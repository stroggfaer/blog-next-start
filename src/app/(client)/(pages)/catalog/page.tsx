import {Metadata} from "next";
import {TitleUi} from "@/app/(client)/components/ui/title";
import dynamic from "next/dynamic";
import {SpinContent} from "@/app/(client)/components/ui/SpinContent";
const LayoutClient = dynamic(() => import('@/app/(client)/components/content/Layout/LayoutClient'), {
    loading: () => SpinContent(),
}) // Lazy Loading
// SSR;
export const metadata: Metadata = {
    title: 'Каталог',
    description: '...каталог',
}
const dataFetch = [] as any[];

const CatalogPage = () => {
    return (
        <LayoutClient>
            <div className={'content__com'}>
                <TitleUi title={metadata?.title} />
                <div className={'content__wrap'}>
                    <p>Контент...</p>
                </div>
            </div>
        </LayoutClient>
    );
};

export default CatalogPage;
