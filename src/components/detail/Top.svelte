<script>
    import close from '@images/close.png'
    import enter from '@images/enter.png'

    export let styles, width, item, detailHide
</script>

<div class="{ styles.top }">
    <p class="{ styles.title }">
        <img src="{item.logo}" alt="">
    </p>
    {#if width <= 1000}
    <div class="{styles.utils}">
        <a href="{item.url}" class="{styles.link}" target="_blank" rel="noreferrer">
            <img src="{ enter }" alt="">
        </a>
        <button type="button" class="{styles.close}" on:click={ detailHide }>
            <img src="{ close }" alt="">
        </button>
    </div>
    {:else}
    <button type="button" class="{styles.close}" on:click={ detailHide }>
        <img src="{ close }" alt="">
    </button>
    {/if}
</div>