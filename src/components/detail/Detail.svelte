<script>
    import styles from './detail.module.css';
    import Top from './Top.svelte';
    import Img from './Img.svelte';
    import Text from './Text.svelte';
    import { fly } from 'svelte/transition';
    export let classNames, detailItem, width, detailHide, title

    const cx = classNames.bind(styles);

</script>

<div 
    class="{ cx(styles.detail, title) }"
    data-lenis-prevent
    in:fly={{ y: window.innerHeight, opacity: 1, duration:700 }} 
    out:fly={{ y: window.innerHeight, opacity: 1, duration:700 }}
>
    {#if width <= 1000}
        <Top { styles } { width } item={ detailItem } { detailHide } />
    {/if}
    <div class="{ styles.inner }">
        <Img { styles } img={ detailItem.img } />
        <Text { styles } item={ detailItem } { width } { detailHide } />
    </div>
</div>