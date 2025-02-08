import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActionBasketType, Basket, BasketParams, Product, ProductBasket} from "@/common/types";

interface State {
   basket: Basket
}

const initialState = {
    basket: {
        total: 0,
        productsCounts: 0,
        products: []
    }
} satisfies State as State

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        /**
         * Метод для управления корзиной:
         * - Добавляет новый товар, если его ещё нет.
         * - Обновляет количество товара, если он уже существует.
         * - Удаляет товар, если его количество становится <= 0.
         * - Пересчитывает общее количество товаров и итоговую сумму корзины.
         */
        setStoreBasket: (state, action: PayloadAction<BasketParams>) => {
            const product = action.payload.product as ProductBasket;
            const counts = action.payload.counts;
            // Найти товар в корзине
            const existingProduct = state.basket.products.find((p) => p.id === product.id) || null;
            if (existingProduct) {
                // Если товар уже есть, обновляем его количество
                existingProduct.quantity.counts = counts;
                // Если количество стало <= 0, удаляем товар
                if (existingProduct.quantity.counts <= 0) {
                    state.basket.products = state.basket.products.filter((p) => p.id !== product.id);
                }
            } else {
                if (product.quantity.counts > 0 && counts > 0) {
                    state.basket.products.push({...product, quantity: {...product.quantity, counts}});
                }
            }

            // Всего товар в корзине
            state.basket.productsCounts = state.basket.products.reduce(
                (accumulator, item) => accumulator + item.quantity.counts,
                0
            );

            // Пересчёт итоговой суммы корзины
            state.basket.total = state.basket.products.reduce(
                (accumulator, item) => accumulator + item.price.value * item.quantity.counts,
                0
            );

            state.basket.products = state.basket.products.map((pr: Product, index: number) => {
                return {
                    key: pr.id,
                    ...pr,
                    total: pr.price.value * pr.quantity.counts
                }
            }) as ProductBasket[];

        },
    },
});






export const { setStoreBasket } = basketSlice.actions;
export default basketSlice.reducer;