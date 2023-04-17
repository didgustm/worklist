<script>
    import styles from "./header.module.css"
    import Logo from "./Logo.svelte"
    import Btn from "./Btn.svelte";
    import { fly } from "svelte/transition";

    export let classNames, direction ,gnbClick

    const cx = classNames.bind(styles)
    const gnb = {
        menus: ['All', 'Website', 'Landing', 'Code'],
        cx: cx,
        gnbClick: gnbClick
    }
</script>

<header class="{ cx('header', { fade: direction == 1 }) } mont" in:fly={{ x: -250, duration: 600, delay: 100 }}>
    <div class="inner { styles.inner }">
        <Logo { styles } />
        <Btn { ...gnb } />
    </div>
</header>