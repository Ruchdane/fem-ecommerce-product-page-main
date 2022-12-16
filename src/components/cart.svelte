<script lang="ts">
    import { cart, removeItem, checkout } from "../stores";
    import IconDelete from "./icons/icon-delete.svelte";
    export let id = "";
    export let visible = false;
    export let onblur = () => {
        visible = false;
    }
</script>

<div class="cart" {id} class:hidden={!visible} on:blur={onblur} >
    <h4 class="cart__title">Cart</h4>
    {#if $cart.items.length > 0}
        <ul class="cart__items">
            {#each $cart.items as { count, name, thumb, unit_price }, index (index)}
                <li class="cart__item item">
                    <img src={thumb} alt={thumb} class="item__thumb" />
                    <div class="item__name">{name}</div>
                    <div class="item__price">
                        <span class="item__price-calculation">
                            ${unit_price} x {count}
                        </span>
                        <span class="item__price-value">
                            ${unit_price * count}
                        </span>
                    </div>
                    <button
                        class="item__delete"
                        on:click={() => removeItem(index)}
                    >
                        <IconDelete/>
                    </button>
                </li>
            {/each}
        </ul>
        <div class="item__checkout">
            <button class="btn-primary" on:click={() => checkout()}>
                Checkout
            </button>
        </div>
    {:else}
        <div class="cart__empty">Your cart is empty</div>
    {/if}
</div>

<style lang="scss">
     #m-header-cart{
        left: 1rem;
        top: 5rem;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,0.3);
    }
    .cart {
        position: absolute;
        z-index: var(--z-cart);
        width: max-content;
        top: 0;
        left: 0;
        overflow-y: auto;
        background-color: var(--white);
        box-shadow: 0px 10px 20px 0px var(--grayish-blue);
        // box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2); /* adjust the values to add a softer shadow */
        width: fit-content;
        min-width: 350px;
        min-height: 200px;
        border-radius: 10px;
        &__title {
            padding:1rem;
            font-weight: 700;
            font-size: 1.2rem;
            // Border to create a line separation betwwen the title and the items
            border-bottom: 1px solid var(--dark-grayish-blue);
        }
        
        &__items {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            max-height: 300px;
            overflow: auto;
            list-style-type: none;
            gap: 10px;
        }
        &__empty {
            text-align: center;
            vertical-align: middle;
        }
    }
    .item {
        display: grid;
        gap: 0.5rem 1rem;
        color: var(--dark-grayish-blue);
        grid-template-areas:
            "thumb name  name  delete"
            "thumb price price delete";

        &__thumb {
            grid-area: thumb;
            border-radius: 10px;
            max-width: 3rem;
        }
        &__name {
            grid-area: name;
        }
        &__price {
            grid-area: price;
        }

        &__delete {
            grid-area: delete;
            background-color: transparent;
            border: none;
            height: fit-content;
            align-self: center;
        }

        &__checkout{
            padding: 1rem;
        }

        &__price-value {
            color: black;
        }
    }
</style>
