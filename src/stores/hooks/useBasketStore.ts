import { useAppSelector, store, wrapper } from "@/stores/store";
import {ActionBasketType, BasketParams, Product} from "@/common/types";
import {setStoreBasket} from "@/stores/redux/basket.ts";
export const useBasketStore = () => {
    const state = useAppSelector((state) => state.basket);

    const getState = () => {
        return store.getState().basket;
    };

    const getBasketFind = (id: number): Product | undefined => {
        return state.basket.products.find((pr: Product) => pr.id === id);
    };

    // Методы добавить/редактировать/удалить
    const setBasket = (params: BasketParams) => {
        store.dispatch(setStoreBasket(params));
    }
    const removeBasket = (product: Product) => {
        store.dispatch(setStoreBasket({product: product, counts: 0}));
    }

    return {
        state,
        getBasketFind,
        getState,
        setBasket,
        removeBasket
    }
}