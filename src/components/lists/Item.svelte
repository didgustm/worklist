<script>
    import Title from "./Title.svelte";
    import Info from "./Info.svelte";

    export let styles, item, motions, cx, idx
</script>

<div 
    class="item { cx(styles.item, { active: item.show }) }"
    data-type="{ item.type }"
    bind:this={ motions[idx] }
>
    <button type="button" class="btn_more">
        <!-- <img src="/worklist/images/fasthunter/thumnail.webp" alt="" class="thumnail"> -->
        <Title styles={ styles } item={ item } />
        <Info  styles={ styles } item={ item } />
    </button>
</div>