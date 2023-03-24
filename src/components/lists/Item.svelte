<script>
    import Thumnail from "./Thumnail.svelte";
    import Info from "./Info.svelte";

    export let styles, item, motions, cx, idx, detailShow, sort
</script>

<div 
    class="item { cx(styles.item, { active: item.show }, { hide: item.type != sort && sort != 0 }) }"
    data-type="{ item.type }"
    bind:this={ motions[idx] }
>
    <button 
        type="button" 
        class="btn_more"
        on:click={ detailShow(item) }
    >
        <Thumnail { styles } { item } />
        <Info  { styles } { item } />
    </button>
</div>