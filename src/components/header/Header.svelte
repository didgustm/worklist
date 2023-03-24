<script>
    import styles from "./header.module.css"
    import Logo from "./Logo.svelte"
    import Btn from "./Btn.svelte";
    export let classNames, direction ,gnbClick

    const cx = classNames.bind(styles)
    const gnb = {
        menus: ['menu01', 'menu02', 'menu03', 'menu04'],
        cx: cx,
        gnbClick: gnbClick
    }
</script>

<header class="{ cx('header', { fade: direction == 1 }) } mont">
    <div class="inner { styles.inner }">
        <Logo { styles } />
        <Btn { ...gnb } />
    </div>
</header>