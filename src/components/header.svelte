<script type="ts">
import Cart from "../components/cart.svelte";
    import { setupFloatingCart } from "../floating";
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";
    let show_cart = false;
</script>

<header class="header desktop">
    <div class="header__links">
        <h1 class="header__logo">sneakers</h1>
        <nav class="navlinks">
            <a href="#links" class="navlinks__element">Collections</a>
            <a href="#links" class="navlinks__element">Men</a>
            <a href="#links" class="navlinks__element">Women</a>
            <a href="#links" class="navlinks__element">About</a>
            <a href="#links" class="navlinks__element">Contact</a>
        </nav>
    </div>
    <div class="header__action">
        <button
            id="header-cart-btn"
            class="header__cart btn-secondary"
            on:click={() => {
                show_cart = !show_cart;
                setupFloatingCart("header-cart-btn", "header-cart");
            }}
        >
            <img src={cart} alt="cart" />
        </button>
        <Cart id="header-cart" visible={show_cart}/>
        <button class="header__profile">
            <img src={avatar} alt="RA" />
        </button>
    </div>
</header>

<style lang="scss">
    @import "../mixin.scss";
    .header {
        display: flex;
        justify-content: space-between;
        gap: 10em;

        padding-bottom: 25px;
        border-bottom: 2px solid var(--light-grayish);
        &__links {
            display: flex;
            align-items: center;
            gap: 4em;
        }
        &__action {
            display: flex;
            gap: 1em;
            align-items: center;
        }

        &__logo {
            cursor: pointer;
            margin: 0;
            font-weight: 700;
            font-size: 2.5rem;
        }

        &__profile {
            cursor: pointer;
            --radius: 60px;
            width: var(--radius);
            height: var(--radius);
            border: none;
            border-radius: 50%;
            &:hover {
                border: 1px solid var(--orange);
            }
            & > img {
                width: 100%;
                height: auto;
            }
        }
    }
    .navlinks {
        color: var(--dark-grayish-blue);
        display: flex;
        gap: 2em;
        &__element {
            text-decoration: none;
            color: var(--dark);
            &:hover {
                box-shadow: 0px 37px var(--white),0 40px var(--orange);
            }
            &:active{
                color: var(--black);
            }
        }
    }

    @include responsive("md") {
        .header,
        .header__links {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
</style>
