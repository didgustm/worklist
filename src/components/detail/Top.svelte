<script>
    export let styles, width, item, detailHide
</script>

<div class="{ styles.top }">
    <p class="{ styles.title }">{ item.title }</p>
    {#if width <= 1000}
    <div class="{styles.utils}">
        <a href="https://fasthunter.co.kr/" class="{styles.link}" target="_blank" rel="noreferrer">
            Go
        </a>
        <button type="button" class="{styles.close}" on:click={ detailHide }>
            X
        </button>
    </div>
    {:else}
    <button type="button" class="{styles.close}" on:click={ detailHide }>
        X
    </button>
    {/if}
</div>