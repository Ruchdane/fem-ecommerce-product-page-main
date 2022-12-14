<script type="ts">
    import "../style.scss";
    import { setupFloatingCart } from "../floating";
    import Cart from "./cart.svelte";
    import IconCart from "../components/icons/icon-cart.svelte";
    import  IconMenu from "../components/icons/icon-menu.svelte";
    import  IconClose from   "../components/icons/icon-close.svelte";

    
    const avatar = "/images/image-avatar.png";

    let show_cart = false;
    let show_navlinks = false;
</script>

<header class="header mobile">
    <div class="header__links">
        <button on:click={() => show_navlinks = true} class="header__button btn-secondary">
            <IconMenu/>
        </button>
        <h1 class="header__logo">sneakers</h1>
        {#if show_navlinks}
        <nav class="header__sidebar">
            <button on:click={() => show_navlinks = false} class="header__button btn-secondary">
                <IconClose/>
            </button>
            <ul class="header__navlinks">
                <li><a href="#links" class="header__navlinks-element">Collections</a></li>
                <li><a href="#links" class="header__navlinks-element">Men</a></li>
                <li><a href="#links" class="header__navlinks-element">Women</a></li>
                <li><a href="#links" class="header__navlinks-element">About</a></li>
                <li><a href="#links" class="header__navlinks-element">Contact</a></li>
            </ul>
        </nav>
        {/if}
    </div>
    <div class="header__action" id="m-header-cart-btn">
        <button class="header__button btn-secondary" on:click={() =>{
             show_cart = !show_cart;
             setupFloatingCart("m-header-cart-btn", "m-header-cart");
        }}>
        <IconCart/>
        </button>
        <Cart id="m-header-cart" visible={show_cart} />
        <button class="header__profile">
            <img src={avatar} alt="RA" />
        </button>
    </div>
</header>
<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        gap: 3em;
        padding-bottom: 25px;
        border-bottom: 2px solid var(--light-grayish);

        &__sidebar{
            position: absolute;
            height: 100vh;
            width: 75%;
        }
        &__links{
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        &__action{
            display: flex;
            gap: 0.7rem;
            align-items: center;
        }

        &__logo{
            cursor: pointer;
            margin: 0;
            font-weight: 700;
            font-size: 2.5rem;
        }

        &__button{
            cursor: pointer;
            background-color: transparent;
            border: none;
            &:focus{
                border: 1px solid var(--orange);
            }
        }

        &__profile{
            cursor: pointer;
            --radius: 40px;
            width: var(--radius);
            height: var(--radius);
            border: none;
            border-radius: 50%;
            &:hover{
                border: 1px solid var(--orange);
            }
            & > img {
                width: 100%;
                height: auto;
            }
        }

        &__navlinks{
        display: flex;
        flex-direction: column;
        gap: 2em;
        &-element{
            text-decoration: none;
            color: var(--dark);
            &:hover{
                color: var(--dark-grayish-blue);
                border-bottom: 1px solid var( --orange);
            }
        }
    }
    }

</style>