<script type="ts">
    import Cart from "../components/cart.svelte";
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";
    
    let show_cart = false;
</script>

<header class="header">
    <div class="header-link">
        <h1 class="logo">sneakers</h1>
        <nav class="navlinks">
            <a href="#links" class="navlinks__element">Collections</a>
            <a href="#links" class="navlinks__element">Men</a>
            <a href="#links" class="navlinks__element">Women</a>
            <a href="#links" class="navlinks__element">About</a>
            <a href="#links" class="navlinks__element">Contact</a>
        </nav>
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