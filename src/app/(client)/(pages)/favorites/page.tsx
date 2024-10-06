import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {TitleUi} from "@/app/(client)/components/ui/title";
// SSR;
export const metadata: Metadata = {
    title: 'Избранное',
    description: '',
}
const dataFetch = [] as any[];

const FavoritesPage = () => {
    return (
        <LayoutClient>
            <div className={'content__com'}>
                <TitleUi title={metadata.title} />
                <div className={'content__wrap'}>
                    <p>Контент...</p>
                </div>
            </div>
        </LayoutClient>
    );
};

export default FavoritesPage;
