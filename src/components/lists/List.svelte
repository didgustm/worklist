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
                {#if sort == 0}
                <Item { item } { idx } {...listItem} />
                {:else}
                    {#if sort == item.type}
                    <Item { item } { idx } {...listItem} />
                    {/if}
                {/if}
            {/each}
        </div>
    </div>
</section>