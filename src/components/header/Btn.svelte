<script>
    export let menus, cx, gnbClick
    let current = `gnb1`
</script>

<ul class="{ cx(`btns`) }">
    {#each menus as menu, i}
        <li class="{ cx(`gnb${i+1}`, { active: current == `gnb${i+1}` }) }">
            <button
                type="button" 
                on:click={ () => {
                    current = `gnb${i+1}`;
                    gnbClick(i);
                } }
            >
                {menu}
            </button>
        </li>
    {/each}
</ul>