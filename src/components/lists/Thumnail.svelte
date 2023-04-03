<script>

    export let styles, item, title, cx

    let src = item.logo
</script>

<div class="{ cx(styles.thumnail, title) }">
    <img { src } alt="">
</div>