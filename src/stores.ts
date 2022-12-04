import { writable } from "svelte/store";
import type { Cart,CartItem } from "./app";

const initailCart: Cart = {
    items: [],
    add: function (item: CartItem): Cart {
        this.items.push(item);
        return this;
    },
    remove: function (index: number): Cart {
        this.items.splice(index, 1);
        return this;
    },
    empty: function (): Cart {
        this.items = [];
        return this;
    }
};
export const cart = writable(initailCart)

export function addItem(item: CartItem) {
    cart.update(cart => cart.add(item))
}

export function removeItem(index: number) {
    cart.update(cart => cart.remove(index))
}
export function checkout(){
    cart.update(cart => cart.empty())
}