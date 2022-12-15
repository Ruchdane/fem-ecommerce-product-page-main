<script lang="ts">
    import IconPlus from "../components/icons/icon-plus.svelte";
    import IconMinus from "../components/icons/icon-minus.svelte";
    export let count = 0
    export let onchange : (val: number) => void;
</script>

<div class="count-btn">
    <button class="count-btn__btn" on:click={() => onchange(count-1)} disabled={count === 0}>
        <IconMinus/>
    </button>
    <span class="count-btn__label"> {count} </span>
    <button class="count-btn__btn" on:click={() => onchange(count+1)}> 
        <IconPlus/>
    </button>
</div>

<style lang="scss">
    .count-btn{
        display: flex;
        gap: 16px;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        background-color: var(--light-grayish);
        min-width: 100px;
        &__btn{
            cursor: pointer;
            background-color: transparent;
            border: none;
            color: var(--orange);
           &:disabled{
                cursor: not-allowed;
                filter: opacity(0);
            }
            &:hover{
                filter:opacity(0.2);
            }
        }

        // &__label{

        // }
    }
</style>