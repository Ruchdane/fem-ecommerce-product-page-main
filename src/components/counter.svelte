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