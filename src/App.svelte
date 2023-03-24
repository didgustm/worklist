<script>
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte"
	import List from "./components/lists/List.svelte";
    import Footer from "./components/footer/Footer.svelte";
	import Detail from "./components/detail/Detail.svelte";
	import { arrays } from "./components/items/Items";

	let y, w, way, 
            items = arrays,
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
			items[i].show  = x.offsetTop < (scroll+window.innerHeight) / 1.1? true: items[i].show ;
		});
		if(window.innerWidth <= 1000 && direction != 0) way = direction;
	})
	
</script>

<svelte:window 
	bind:scrollY={y}
	bind:innerWidth={w}
	on:load={ () => {
		motions.forEach((x, i) => {
			items[i].show  = x.offsetTop < (y+window.innerHeight) / 1.1? true: items[i].show ;
		})
	} }
	on:scroll = { () => {
		way = beforeScroll < y? 1: -1;
		beforeScroll = y
	} }
/>

<Header { classNames } direction={ way } { gnbClick } />
<main>
	<List { classNames } { items } { motions } { detailShow } { sort } />
    <Footer />
</main>
{#if visible}
<Detail { classNames } { detailItem } width={ w } { detailHide } />
{/if}