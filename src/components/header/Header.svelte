<script>
    import styles from "./header.module.css"
    import classNames from "classnames/bind"
    import Logo from "./Logo.svelte"
    import Gnb from "./Gnb.svelte"
    export let active, scrollMove

    const cx = classNames.bind(styles)
    const gnb = {
        menus: ['menu01', 'menu02', 'menu03', 'menu04', 'menu05'],
        flex: styles.flex,
        scrollMove: scrollMove
    }
</script>

<header class="{ cx('header', { active: active }) } mont">
    <div class="{ `${styles.flex} ${styles.inner}` }">
        <Logo />
        <Gnb { ...gnb } />
    </div>
</header>