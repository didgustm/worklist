<script>
    export let styles, item
</script>

<div class="{ styles.item_info }">
    <p class="{styles.name}">{ item.title }</p>
    <p class="{styles.type}">
        {#if item.type == 1} Website
        {:else if item.type == 2} Landing
        {/if}
    </p>
</div>