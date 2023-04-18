<script>
    import Thumnail from "./Thumnail.svelte";
    import Info from "./Info.svelte";
    import { fly } from "svelte/transition";

    export let styles, item, motions, cx, idx, detailShow
</script>

<div 
    class="item { cx(styles.item, { active: item.show }) }"
    data-type="{ item.type }"
    bind:this={ motions[idx] }
    in:fly={{ y:50, opacity:1, duration:500 }}
>
    <button 
        type="button" 
        class="btn_more"
        on:click={ detailShow(item) }
    >
        <Thumnail { styles } { item } title={item.name} cx={cx} />
        <Info { styles } { item } />
    </button>
</div>