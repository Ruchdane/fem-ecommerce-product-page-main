// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

export interface Preview {
    src: string,
    thumb: string,
}

export interface Cart {
    empty(): Cart;
    remove(index: number): Cart;
    add(item: CartItem): Cart;
	items: CartItem[]
}

export interface CartItem {
	name: string,
	thumb: string,
	unit_price: number,
	count: number,
}