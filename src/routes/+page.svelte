<script lang="ts">
    import ProductPreview from "../components/product_preview.svelte";
    import Counter from "../components/counter.svelte";

    import { addItem } from "../stores";

    const cart = "/icons/icon-cart.svg";
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
<article class="product">
    <ProductPreview {previews} />
    <div class="product__info">
        <h2 class="product__company">Sneaker Company</h2>
        <h1 class="product__name">Fall Limited Edition Sneakers</h1>
        <p class="product__description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
        </p>
        <div class="product__price discount-price">
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

<style lang="scss">
    .product {
        --block-width: 430px;
        display: flex;
        justify-content: center;
        gap: 6em;
        margin-left: auto;
        margin-right: auto;
        &__info {
            display: flex;
            max-width: var(--block-width);
            flex-direction: column;
            gap: 1em;
        }
        &__company {
            color: var(--orange);
        }
        &__name {
            font-weight: 700;
            margin: 0;
            font-size: 2.5rem;
            color: var(--black);
        }
        &__description {
            line-height: 1.8rem;
            color: var(--dark-grayish-blue);
        }
        // &__price {
          
        // }

        &__add-to-cart-btn{
            cursor: pointer;
            border:none;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
            border-radius: 10px;
            width: 100%;
            color: var(--white);
            background-color: var(--orange);

        }
        &__cart {
            width: 100%;
            display: flex;
            gap: 1em;
        }
    }

    .discount-price {
        display: grid;
        gap: 0.4rem 1rem;
        grid-template-areas: "value rate"
        "initial .";
        width: fit-content;
        &__value {
            grid-area: value;
            font-weight: 700;
            font-size: 2rem;
        }
        &__rate {
            padding: 5px;
            font-weight: 700;
            height: fit-content;
            color: var(--orange);
            background-color: var(--pale-orange);
            grid-area: rate;
        }
        &__intial {
            color: var(--dark-grayish-blue);
            text-decoration: line-through;
            grid-area: initial;
        }
    }
</style>
