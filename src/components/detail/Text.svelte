<script>
    import Top from "./Top.svelte";


    export let styles, item, width, detailHide
</script>

<div class="{ styles.txt }">
    <div class="{ styles.wrap }">
        {#if width > 1000}
            <Top styles={styles} width={ width } item={ item } detailHide={ detailHide } />
        {/if}
        <p class="{styles.explain}">Explain About...</p>
        <dl>
            <dt class="medium">Url:</dt>
            <dd><a href="{item.url}" target="_blank" rel="noreferrer">{item.url}</a></dd>
        </dl>
        <dl>
            <dt class="medium">Category:</dt>
            <dd>
                {#if item.type == 1} Website
                {:else if item.type == 2} Landing
                {:else} Script
                {/if}
            </dd>
        </dl>
        <dl>
            <dt class="medium">Date:</dt>
            <dd>{ item.date }</dd>
        </dl>
        <dl>
            <dt class="medium">Device:</dt>
            <dd>{ item.device }</dd>
        </dl>
    </div>
</div>