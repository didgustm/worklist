<script>
    import Item from "./Item.svelte"
    import styles from "./list.module.css"
    export let classNames, items, motions, detailShow, sort

    const cx = classNames.bind(styles);
    const listItem = {
        styles: styles,
        motions: motions,
        cx: cx,
        detailShow: detailShow
    }
    
</script>

<section class="{ styles.worklist }">
    <div class="inner">
        <div class="lists { styles.lists }">
            {#each items as item, idx}
                <Item { item } { idx } {...listItem} { sort } />
            {/each}
        </div>
    </div>
</section>