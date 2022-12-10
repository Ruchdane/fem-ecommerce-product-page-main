<script lang="ts">
    const minus =  "/icons/icon-minus.svg";
    const plus =  "/icons/icon-plus.svg";
    export let count = 0
    export let onchange : (val: number) => void;
</script>

<div class="count-btn">
    <button class="count-btn__btn" on:click={() => onchange(count-1)} disabled={count === 0}>
        <img src={minus} alt="-"> 
    </button>
    <span class="count-btn__label"> {count} </span>
    <button class="count-btn__btn" on:click={() => onchange(count+1)}> 
        <img src={plus} alt="+">
    </button>
</div>

<style lang="scss">
    .count-btn{
        display: flex;
        gap: 16px;
        padding: 5px;
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
            :disabled{
                color: var(--grayish-blue);
            }
        }

        // &__label{

        // }
    }
</style>