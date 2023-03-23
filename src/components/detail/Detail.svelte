<script>
    import styles from './detail.module.css';
    import Top from './Top.svelte';
    import Img from './Img.svelte';
    import Text from './Text.svelte';
    import { fly } from 'svelte/transition';
    export let classNames, detailItem, width, detailHide

    const cx = classNames.bind(styles)
</script>

<div class="{ styles.detail }" in:fly={{ y: window.innerHeight, opacity: 1, duration:700 }} out:fly={{ y: window.innerHeight, opacity: 1, duration:700 }}>
    {#if width <= 1000}
        <Top styles={ styles } width={ width } item={ detailItem } detailHide={ detailHide } />
    {/if}
    <div class="{ styles.inner }">
        <Img styles={ styles } />
        <Text styles={ styles } item={ detailItem } width={ width } detailHide={ detailHide } />
    </div>
</div>