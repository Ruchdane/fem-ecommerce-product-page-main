<script lang="ts">
    import type { Preview } from "src/app";
    import IconNext from "./icons/icon-next.svelte";
    import IconPrevious from "./icons/icon-previous.svelte";
    import IconClose from "./icons/icon-close.svelte";
    import { onMount } from "svelte";

    export let previews: Preview[];
    export let navigator: boolean = false;
    export let default_idx: number = 0;
    export let onclick: ((id: number) => void) | undefined = undefined;

    let product_preview_index = default_idx;
    const preview_count = previews.length;
    const onnext = () => {
        if (product_preview_index < preview_count) product_preview_index++;
    };
    const onprev = () => {
        if (product_preview_index > 0) product_preview_index--;
    };

    export let ondismiss = () => {
        console.log("dismissed");
    };
</script>

<div class="product__preview">
    <div class="navigator-container">
        {#if navigator}
            <button class="preview__dismiss" on:click={ondismiss}>
                <IconClose />
            </button>
            <button
                class="preview__navigator-prev"
                on:click={onprev}
                disabled={product_preview_index <= 0}
            >
                <IconPrevious />
            </button>
            <button
                class="preview__navigator-next"
                on:click={onnext}
                disabled={product_preview_index >= preview_count - 1}
            >
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <IconNext />
            </button>
        {/if}
        <button
            class="preview__navigator-prev-mobile mobile"
            on:click={onprev}
            disabled={product_preview_index <= 0}
        >
            <IconPrevious />
        </button>
        <button
            class="preview__navigator-next-mobile mobile"
            on:click={onnext}
            disabled={product_preview_index >= preview_count - 1}
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <IconNext />
        </button>
        <button
            on:click={() => {
                if (onclick != undefined) onclick(product_preview_index);
            }}
            class="btn-secondary  desktop"
            disabled={onclick == undefined}
            >  
            <img
                src={previews[product_preview_index].src}
                alt="product"
                class="product__img-main"
            />
        </button>
        <img
                src={previews[product_preview_index].src}
                alt="product"
                class="product__img-main mobile"
            />
    </div>
    <div class="product__thumbnails desktop">
        {#each previews as item, index (index)}
            <button
                on:click={() => (product_preview_index = index)}
                class="thumbnail_btn"
                class:thumbnail_btn-active={product_preview_index === index}
            >
                <img
                    src={item.thumb}
                    alt="thumbnail"
                    class="thumbnail_btn-img"
                />
            </button>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../mixin.scss";
    .product {
        --block-width: 430px;
        &__preview {
            display: flex;
            flex-direction: column;
            gap: 2em;
        }
        &__img-main {
            width: 100%;
            height: auto;
            max-width: var(--block-width);
            border-radius: 10px;
        }
        &__thumbnails {
            display: flex;
            max-width: var(--block-width);
            gap: 1em;
        }
    }

    .rounded-button {
        cursor: pointer;
        position: absolute;

        max-width: 40px;
        padding: 1rem;
        background-color: var(--white);
        color: var(--black);

        border: none;
        border-radius: 50%;

        transition: all 0.2s ease;
        &:hover {
            color: var(--orange) !important;
        }

        &:active {
            filter: none;
            color: var(--orange);
            transform: translateY(2px);
        }
        &:disabled {
            cursor: not-allowed;
            box-shadow: none;
            pointer-events: none;
            background-color: var(--grayish-blue);
        }
    }
    .navigator-container {
        &:disabled {
            cursor: auto;
        }
        position: relative;
    }

    .preview {
        &__dismiss {
            @extend .rounded-button;
            background-color: transparent;
            top: -2.5rem;
            right: 0.5rem;
        }
        &__navigator-prev {
            @extend .rounded-button;
            top: 50%;
            left: -1rem;
        }
        &__navigator-next {
            @extend .rounded-button;
            top: 50%;
            right: -1rem;
        }

        &__navigator-prev-mobile {
            @extend .rounded-button;
            top: 40%;
            left: 1rem;
        }
        &__navigator-next-mobile {
            @extend .rounded-button;
            top: 40%;
            right: 1rem;
        }
    }

    .thumbnail_btn.thumbnail_btn-active {
        border: 3px solid var(--orange);
        .thumbnail_btn-img {
            filter: opacity(0.4);
        }
    }
    .thumbnail_btn {
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 10px;
        border: 3px solid white;

        padding: 0;
        &-img {
            border-radius: 5px;
            width: 100%;
            height: auto;
        }
        &:hover {
            .thumbnail_btn-img {
                filter: opacity(0.4);
            }
        }
    }

    @include responsive("xm") {
        .product__img-main {
            width: 100vw;
            border-radius: 0px;
        }
    }
</style>
