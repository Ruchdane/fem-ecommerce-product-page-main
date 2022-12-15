 <script lang="ts">
    import ProductPreview from "../components/product_preview.svelte";
    import Counter from "../components/counter.svelte";

    import { addItem } from "../stores";
    import IconCart from "../components/icons/icon-cart.svelte";
    import IconMenu from "../components/icons/icon-menu.svelte";

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

    let show_lightbox = false;
    let lightbox_idx = 0;
    function show_lightboxfn(idx: number): void {
        show_lightbox = true;
        lightbox_idx = idx;
    }
</script>

<svelte:head>
    <title>Frontend Mentor | E-commerce product page</title>
</svelte:head>
<article class="product">
    <div class="lightbox" class:hidden={!show_lightbox}>
        <ProductPreview 
            {previews}
            navigator={true}
            ondismiss={() => show_lightbox = false} 
            default_idx={lightbox_idx}
        />
    </div>
    <ProductPreview {previews} onclick={show_lightboxfn}/>
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
            <button class="product__add-to-cart-btn btn-primary" on:click={addtocart} disabled={product_count==0}>
                <IconCart/>
                <span>Add to cart</span>
            </button>
        </div>
    </div>
</article>

<style lang="scss">
    @import "../mixin.scss";

    .product {
        --block-width: 430px;
        display: flex;
        flex-wrap: wrap;
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
            font-size: 2.5em;
            color: var(--black);
        }
        &__description {
            line-height: 1.8rem;
            font-size: 1rem;
            color: var(--dark-grayish-blue);
        }
        // &__price {
          
        // }

        &__add-to-cart-btn{
            gap: 1rem;
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
        "fake .";
        width: fit-content;
        &__value {
            grid-area: value;
            font-weight: 700;
            font-size: 2em;
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
            grid-area: fake;
        }
    }

    .lightbox{
        z-index: var(--z-lightbox);
        position: absolute;
        top:0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;

    }

    @include responsive("xm"){
        .product{
            font-size: 0.8em;
            gap: 1rem;
            &__info{
                gap: 0.5rem;
            }
            &__cart {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1em;
            }   
        }
        .discount-price {
            width: 100%;
            grid-template-columns: 2fr 1fr 1fr 2fr;
            grid-template-areas: "value rate . fake";
            &__initiale{
                justify-self: end;
            }
            
        }

    }
</style>
