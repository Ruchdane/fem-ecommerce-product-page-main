<script lang="ts">
    import type { Preview } from "src/app";


    export let previews : Preview[] ;
    export let navigator : boolean = false;
    export let onclick = () => {};
    const next = "/icons/icon-next.svg";
    const prev = "/icons/icon-previous.svg";
    const dismiss = "/icons/icon-close.svg";

    let product_preview_index = 0;

    const preview_count = previews.length;
    const onnext = () => {
        if (product_preview_index < preview_count) product_preview_index++;
    };
    const onprev = () => {
        if (product_preview_index > 0) product_preview_index--;
    };

    const ondismiss = () => {
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
        <img src={next} alt="next" on:click={onclick}/>
    </button>
    {/if}
    <img
        src={previews[product_preview_index].src}
        alt="product"
        class="product__img-main"
    />
    <div class="product__thumbnails">
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
