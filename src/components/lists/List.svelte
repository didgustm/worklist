<script>
    import Item from "./Item.svelte"
    import styles from "./list.module.css"
    export let classNames, items, motions

    const cx = classNames.bind(styles);
    
</script>

<section class="{ styles.worklist }">
    <div class="inner">
        <div class="lists { styles.lists }">
            {#each items as item, idx}
                <Item styles={ styles } item={ item } motions={ motions } cx={ cx } idx={ idx } />
            {/each}
        </div>
    </div>
</section>