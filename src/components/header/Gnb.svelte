<script>
    export let menus, flex, scrollMove, cx, current
</script>

<nav class="gnb">
    <ul class="{ flex }">
        {#each menus as menu, i}
            <li class="{ cx(`gnb${i+1}`, { active: current == `gnb${i+1}` }) }">
                <button
                    type="button" 
                    on:click={ () => {
                        scrollMove(i+1);
                        current = `gnb${i+1}`;
                    } }
            >
                {menu}
            </button>
            </li>
        {/each}
    </ul>
</nav>