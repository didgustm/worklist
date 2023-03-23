<script>
    import Item from "./Item.svelte"
    import styles from "./list.module.css"
    export let classNames, items, motions, detailShow

    const cx = classNames.bind(styles);
    
</script>

<section class="{ styles.worklist }">
    <div class="inner">
        <div class="lists { styles.lists }">
            {#each items as item, idx}
                <Item styles={ styles } item={ item } motions={ motions } cx={ cx } idx={ idx } detailShow={ detailShow } />
            {/each}
        </div>
    </div>
</section>