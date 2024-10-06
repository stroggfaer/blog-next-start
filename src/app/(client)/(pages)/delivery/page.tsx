import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {TitleUi} from "@/app/(client)/components/ui/title";
// SSR;
export const metadata: Metadata = {
    title: 'Доставка автотранспортом',
    description: '',
}
const dataFetch = [] as any[];

const DeliveryPage = () => {
    return (
        <LayoutClient>
            <div className={'content__com'}>
                <TitleUi title={metadata.title} />
                <div className={'content__wrap'}>
                    <p>Стоимость доставки зависит от веса заказа, поэтому точную стоимость доставки просьба уточнять у менеджера магазина по тел. +7(843) 203-93-43.</p>
                    <p></p>
                    <p>Сроки доставки: в день заказать и до 3-х рабочих дней для отдельных позиций.</p>
                    <p></p>
                    <p> Стоимость доставки в зависимости от веса заказа:</p>
                    до 1,5 тонн - 2500 руб.<br/>
                    до 2 тонн - 3500 руб.<br/>
                    до 3 тонн - 4000 руб.<br/>
                    до 5 тонн - 9000 руб.<br/>
                    до 8 тонн - 11000 руб.<br/>
                    до 20 тонн - 18000 руб.<br/>

                    <h2 className={'title_h1'} >Доставка по Республике Татарстан</h2>

                    <p>Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории
                        Российской Федерации. Мы совершаем прямые поставки продукции с заводов-производителей
                        России и Европы, а также доставку товара с собственных складов на территории Казани.</p>
                    <h2 className={'title_h1'} >Самовывоз</h2>
                    <p>Компания Гермес осуществляет доставку материалов 7 дней в неделю по всей территории
                        Российской Федерации. </p>
                    <img src={'/images/map.png'} alt={'Доставка по Республике Татарстан'} className={'img__com'} width={700} height={247}/>

                </div>
            </div>
        </LayoutClient>
    );
};

export default DeliveryPage;
