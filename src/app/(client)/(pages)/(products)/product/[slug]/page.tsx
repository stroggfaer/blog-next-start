import {Metadata} from "next";
import {ProductDetail} from "@/app/(client)/components/widget/product";
import {getProductById} from "@/common/api/publicApi";
import {Product} from "@/common/types";
import { notFound } from 'next/navigation';
import dynamic from "next/dynamic";
import {SpinContent} from "@/app/(client)/components/ui/SpinContent";
const LayoutClient = dynamic(() => import('@/app/(client)/components/content/Layout/LayoutClient'), {
    loading: () => SpinContent(),
}) // Lazy Loading

// SSR;
export async function generateMetadata({ params }: any): Promise<any> {
    try {
        const product: Product | null = await getProductById(params.slug); // Получите продукт по slug
        return {
            title: product?.title,
            description: product?.description,
            openGraph: {
                title: product?.title,
                description: product?.description,
                images: product?.image_url ? [product?.image_url] : [],
            },
            product
        };
    }catch (error) {
        console.log('_____generateMetadata',error);
    }
}

// Страница с деталями продукта
const ProductDetailPage = async (props: any) => {
    const result = await generateMetadata(props);
    if (!result?.product) {
        notFound();
    }
    return (
        <LayoutClient>
            <div className={'content__com full'}>
                <ProductDetail
                    slug={props.params.slug}
                    initialProduct={result?.product}
                />
            </div>
        </LayoutClient>
    );
};

export default ProductDetailPage;
