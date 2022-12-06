<script type="ts">
    import Cart from "../components/cart.svelte";
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";
    
    let show_cart = false;
</script>

<header class="header">
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
        <button class="header__cart" on:click={() => show_cart = !show_cart}>
            <img src={cart} alt="cart" />
        </button>
        {#if show_cart}
        <Cart />
        {/if}
        <button class="header__profile">
            <img src={avatar} alt="RA" />
        </button>
    </div>
</header>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        gap: 10em;
        
        padding-bottom: 25px;
        border-bottom: 2px solid var(--light-grayish);
        &__links{
            display: flex;
            align-items: center;
            gap: 4em;
        }
        &__action{
            display: flex;
            gap: 2em;
            align-items: center;
        }

        &__logo{
            cursor: pointer;
            margin: 0;
            font-weight: 700;
            font-size: 2.5rem;
        }

        &__cart{
            cursor: pointer;
            background-color: transparent;
            border: none;
            &:focus{
                border: 1px solid var(--orange);
            }
        }

        &__profile{
            cursor: pointer;
            --radius: 60px;
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
    }
    .navlinks{
        display: flex;
        gap: 2em;
        &__element{
            text-decoration: none;
            color: var(--dark);
            &:hover{
                color: var(--dark-grayish-blue);
                border-bottom: 1px solid var( --orange);
            }
        }
    }


</style>