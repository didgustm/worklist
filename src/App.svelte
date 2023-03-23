<script>
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte"
	import List from "./components/lists/List.svelte";
	import Detail from "./components/detail/Detail.svelte";
	import { resizeGridItem } from "./assets/js/resizeGridItem";
	import { items } from "./components/items/Items";

	let y,
		w,
		way,
		beforeScroll = 0,
		motions = [],
		detailItem = items[0];

	const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);

	function detailShow(item){
		detailItem = item;
		// console.log(detailItem)
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

<Header classNames={ classNames } direction={ way } />
<main>
	<List classNames={ classNames } items={ items } motions={ motions } detailShow={ detailShow } />
</main>
<Detail classNames={ classNames } detailItem={ detailItem } width={ w } />

<style>

</style>