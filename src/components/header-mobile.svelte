<script type="ts">
    import Cart from "./cart.svelte";
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";
    const hamburger = "/icons/icon-menu.svg";

    let show_cart = false;
    let show_navlinks = false;
</script>

<header class="header">
    <div class="header-link">
        <button on:click={() => show_navlinks = !show_navlinks}>
            <img src={hamburger} alt="Show sidebar">
        </button>
        <h1 class="logo">sneakers</h1>
        {#if show_navlinks}
        <nav class="navlinks">
            <a href="#links" class="navlinks__element">Collections</a>
            <a href="#links" class="navlinks__element">Men</a>
            <a href="#links" class="navlinks__element">Women</a>
            <a href="#links" class="navlinks__element">About</a>
            <a href="#links" class="navlinks__element">Contact</a>
        </nav>
        {/if}
    </div>
    <div class="header__action">
        <button class="cart" on:click={() => show_cart = !show_cart}>
            <img src={cart} alt="cart" />
        </button>
        {#if show_cart}
        <Cart />
        {/if}
        <button class="profile">
            <img src={avatar} alt="RA" />
        </button>
    </div>
</header>