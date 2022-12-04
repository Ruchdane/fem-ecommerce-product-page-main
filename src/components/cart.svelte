<script>
    import { cart, removeItem, checkout } from '../stores'

    const trash = "/icons/icon-delete.svg";
</script>

<div class="cart">
    <h4 class="cart__title">Cart</h4>
    {#if $cart.items.length > 0}
        <ul class="cart__items">
            {#each $cart.items as { count, name, thumb, unit_price }, index (index)}
                <li class="cart__item">
                    <img src={thumb} alt={thumb} class="item_thumb" />
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
                        <img src={trash} alt="delete" />
                    </button>
                    <button class="item__checkout" on:click={() => checkout()}>
                        Checkout
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <div class="cart__empty">Your cart is empty</div>
    {/if}
</div>
