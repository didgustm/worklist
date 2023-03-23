<script>
    import { items } from "../items/Items";
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
            <dd><a href="https://fasthunter.co.kr/" target="_blank" rel="noreferrer">https://fasthunter.co.kr/</a></dd>
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