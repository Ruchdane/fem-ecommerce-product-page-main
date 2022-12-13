<script lang="ts">
    import type { Preview } from "src/app";

    export let previews: Preview[];
    export let navigator: boolean = false;
    export let default_idx:number = 0;
    export let onclick: ((id:number) => void) | undefined = undefined;
    const next = "/icons/icon-next.svg";
    const prev = "/icons/icon-previous.svg";
    const dismiss = "/icons/icon-close.svg";

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
    {#if navigator}
        <button class="preview__dismiss" on:click={ondismiss}>
            <img src={dismiss} alt="dismiss" />
        </button>
        <button
            class="preview__navigator-prev"
            on:click={onprev}
            disabled={product_preview_index <= 0}
        >
            <img src={prev} alt="prev" />
        </button>
        <button
            class="preview__navigator-next"
            on:click={onnext}
            disabled={product_preview_index >= preview_count - 1}
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src={next} alt="next" />
        </button>
    {/if}
    <button on:click={() => {if(onclick != undefined) onclick(product_preview_index)}} class="btn-secondary" disabled={onclick == undefined}>
        <img
            src={previews[product_preview_index].src}
            alt="product"
            class="product__img-main"
        />
    </button>
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

    .rounded-button{
        cursor: pointer;
    
    max-width: 40px;
    padding: 1rem;
    background-color: var(--orange);
    color: var(--black);
    
    border: none;
    border-radius: 50%;

    transition: all 0.2s ease;    
    &:hover {
        color: var(--orange)
    }

    &:active{
        filter: none;
        transform: translateY(2px);
    }
    &:disabled{
            cursor: not-allowed;
            box-shadow: none;
            pointer-events: none;
            background-color: var(--grayish-blue);
        }
    }
    .preview {
        &__dismiss {
            @extend .rounded-button;
            background-color: transparent;
        }
        &__navigator-prev {
            @extend .rounded-button;
            position: relative;
            top: 50%
        }
        &__navigator-next {
            @extend .rounded-button;
            position: relative;
            top: 50%;
            right: 0;
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
            .thumbnail_btn-img  {
                filter: opacity(0.4);
            }
        }
    }

</style>
