import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {TitleUi} from "@/app/(client)/components/ui/title";
import {BasketWg} from "@/app/(client)/components/widget/basket";
// SSR;
export const metadata: Metadata = {
    title: 'Корзина',
    description: '',
}
const dataFetch = [] as any[];

const BasketPage = () => {
    return (
        <LayoutClient>
            <div className={'content__com full'}>
                <TitleUi title={metadata?.title ?? ''} />
                <BasketWg />
            </div>
        </LayoutClient>
    );
};

export default BasketPage;
