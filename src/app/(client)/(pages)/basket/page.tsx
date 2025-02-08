import {Metadata} from "next";
import {TitleUi} from "@/app/(client)/components/ui/title";
import {BasketWg} from "@/app/(client)/components/widget/basket";
import dynamic from "next/dynamic";
import {SpinContent} from "@/app/(client)/components/ui/SpinContent";
import {useBasketStore} from "@/stores/hooks/useBasketStore.ts";
const LayoutClient = dynamic(() => import('@/app/(client)/components/content/Layout/LayoutClient'), {
    loading: () => SpinContent(),
}) // Lazy Loading
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
