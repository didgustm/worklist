<script>
    export let styles, width, item
</script>

<div class="{ styles.top }">
    <p class="{ styles.title }">{ item.title }</p>
    {#if width <= 1000}
    <div class="{styles.utils}">
        <a href="https://fasthunter.co.kr/" class="{styles.link}" target="_blank" rel="noreferrer">
            Go
        </a>
        <button type="button" class="{styles.close}">
            X
        </button>
    </div>
    {:else}
    <div class="utils">
        <button type="button" class="{styles.close}">
            X
        </button>
    </div>
    {/if}
</div>