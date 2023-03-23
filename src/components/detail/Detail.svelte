<script>
    import styles from './detail.module.css';
    import Top from './Top.svelte';
    import Img from './Img.svelte';
    import Text from './Text.svelte';
    export let classNames, detailItem, width

    const cx = classNames.bind(styles)
</script>

<div class="{ styles.detail }">
    {#if width <= 1000}
        <Top styles={ styles } width={ width } item={ detailItem } />
    {/if}
    <div class="{ styles.inner }">
        <Img styles={ styles } />
        <Text styles={ styles } item={ detailItem } width={ width } />
    </div>
</div>