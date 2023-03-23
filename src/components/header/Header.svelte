<script>
    import styles from "./header.module.css"
    import Logo from "./Logo.svelte"
    import Btn from "./Btn.svelte";
    export let classNames, direction

    const cx = classNames.bind(styles)
    const gnb = {
        menus: ['menu01', 'menu02', 'menu03', 'menu04'],
        cx: cx
    }
</script>

<header class="{ cx('header', { fade: direction >= 0 }) } mont">
    <div class="inner { styles.inner }">
        <Logo styles={ styles } />
        <Btn { ...gnb } />
    </div>
</header>