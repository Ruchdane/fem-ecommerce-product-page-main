<script type="ts">
    import Cart from "./cart.svelte";
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";
    const hamburger = "/icons/icon-menu.svg";
    const dismiss = "/icons/icon-close.svg";

    let show_cart = false;
    let show_navlinks = false;
</script>

<header class="header">
    <div class="header__links">
        <button on:click={() => show_navlinks = true} class="header__button">
            <img src={hamburger} alt="Show sidebar">
        </button>
        <h1 class="header__logo">sneakers</h1>
        {#if show_navlinks}
        <nav class="header__sidebar">
            <button on:click={() => show_navlinks = false} class="header__button">
                <img src={dismiss} alt="Hide sidebar">
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
    <div class="header__action">
        <button class="header__button" on:click={() => show_cart = !show_cart}>
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
            gap: 2em;
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