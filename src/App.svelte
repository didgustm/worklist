<script>
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte"
	import List from "./components/lists/List.svelte";
	import Detail from "./components/detail/Detail.svelte";
	import { resizeGridItem } from "./assets/js/resizeGridItem";
	// import { items } from "./components/items/Items";

	let items = [
    {   
        name: "TITLE1",
        title: "TITLE1",
        type: 1,
        date: "23. 03. 21.",
        device: "Mobile",
        show: false
    },
    {   
        name: "TITLE2",
        title: "TITLE2",
        type: 2,
        date: "23. 02. 13.",
        device: "PC, Mobile",
        show: false
    },
    {   
        name: "TITLE3",
        title: "TITLE3",
        type: 2,
        date: "23. 02. 01.",
        device: "Mobile",
        show: false
    },
    {   
        name: "TITLE4",
        title: "TITLE4",
        type: 3,
        date: "22. 12. 22.",
        device: "PC, Mobile",
        show: false
    },
    {   
        name: "TITLE1",
        title: "TITLE1",
        type: 1,
        date: "23. 03. 21.",
        device: "Mobile",
        show: false
    },
    {   
        name: "TITLE2",
        title: "TITLE2",
        type: 2,
        date: "23. 02. 13.",
        device: "PC, Mobile",
        show: false
    },
    {   
        name: "TITLE3",
        title: "TITLE3",
        type: 2,
        date: "23. 02. 01.",
        device: "Mobile",
        show: false
    },
    {   
        name: "TITLE4",
        title: "TITLE4",
        type: 3,
        date: "22. 12. 22.",
        device: "PC, Mobile",
        show: false
    }
]


	let y,
		w,
		way,
		beforeScroll = 0,
		motions = [],
		detailItem = items[0],
		visible = false;
	$: sort = 0;

	const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);

	function gnbClick(i){
		sort = i;
		console.log(items);
		items.forEach(x => x.show = x.type == i? true: x.show);
		items = items;
	}

	function detailShow(item){
		detailItem = item;
		visible = true;
		document.documentElement.classList.add('forbid_scroll');
		lenis.stop();
	}
	function detailHide(){
		visible = false;
		document.documentElement.classList.remove('forbid_scroll');
		lenis.start();
	}

	lenis.on('scroll', ({scroll, direction}) => {
		motions.forEach((x, i) => {
			items[i].show  = x.offsetTop < (scroll+window.innerHeight) / 1.2? true: items[i].show ;
		});
		if(window.innerWidth <= 1000 && direction != 0) way = direction;
	})
	
</script>

<svelte:window 
	bind:scrollY={y}
	bind:innerWidth={w}
	on:load={ () => {
		resizeGridItem();
		motions.forEach((x, i) => {
			items[i].show  = x.offsetTop < (y+window.innerHeight) / 1.2? true: items[i].show ;
		})
	} }
	on:resize={ resizeGridItem }
	on:scroll = { () => {
		way = beforeScroll < y? 1: -1;
		beforeScroll = y
	} }
/>

<Header { classNames } direction={ way } { gnbClick } />
<main>
	<List { classNames } { items } { motions } { detailShow } { sort } />
</main>
{#if visible}
<Detail { classNames } { detailItem } width={ w } { detailHide } />
{/if}
<style>

</style>