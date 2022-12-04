<script lang="ts">
    import ProductPreview from "../components/product_preview.svelte";
    import Counter from "../components/counter.svelte";
    import Cart from "../components/cart.svelte";

    import { addItem } from "../stores";
    
    const cart = "/icons/icon-cart.svg";
    const avatar = "/images/image-avatar.png";

    let show_cart = false;
    let product_count = 0;

    const previews = [
        {
            src: "/images/image-product-1.jpg",
            thumb: "/images/image-product-1-thumbnail.jpg",
        },
        {
            src: "/images/image-product-2.jpg",
            thumb: "/images/image-product-2-thumbnail.jpg",
        },
        {
            src: "/images/image-product-3.jpg",
            thumb: "/images/image-product-3-thumbnail.jpg",
        },
        {
            src: "/images/image-product-4.jpg",
            thumb: "/images/image-product-4-thumbnail.jpg",
        },
    ];

    function addtocart() {
        addItem({
            name: "Fall Limited Edition Sneakers",
            thumb: "/images/image-product-1-thumbnail.jpg",
            unit_price: 125,
            count: product_count,
        });
    }
</script>

<svelte:head>
    <title>Frontend Mentor | E-commerce product page</title>
</svelte:head>
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
<main>
    <article class="product">
        <ProductPreview {previews} />
        <div class="product__info">
            <h2 class="product__company">Sneaker Company</h2>
            <h1 class="product__name">Fall Limited Edition Sneakers</h1>
            <p class="product__description">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div class="product__price">
                <span class="discount-price__value">$125.00 </span>
                <span class="discount-price__rate">50% </span>
                <span class="discount-price__intial">$250.00 </span>
            </div>
            <div class="product__cart">
                <Counter
                    count={product_count}
                    onchange={(val) => (product_count = val)}
                />
                <button class="product__add-to-cart-btn" on:click={addtocart}>
                    <img src={cart} alt="cart" />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </article>
</main>

<footer class="attribution">
    Challenge by
    <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer">Frontend Mentor</a
    >. Coded by
    <a href="https://www.frontendmentor.io/profile/Ruchdane">AMADOU Ruchdane</a
    >.
</footer>
