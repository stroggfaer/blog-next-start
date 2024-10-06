import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import {ProductDetail} from "@/app/(client)/components/widget/product";
import {getProductById} from "@/common/api/publicApi";
import {Product} from "@/common/types";
import { notFound } from 'next/navigation';

// SSR;
export async function generateMetadata({ params }) {
    try {
        const product: Product | null = await getProductById(params.slug); // Получите продукт по slug
        return {
            title: product?.title,
            description: product?.description,
            openGraph: {
                title: product?.title,
                description: product?.description,
                images: [product?.image_url],
            },
            product
        };
    }catch (error) {
        console.log('_____generateMetadata',error);
    }
}

// Страница с деталями продукта
const ProductDetailPage = async (props) => {
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
