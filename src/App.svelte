<script>
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte"
	import List from "./components/lists/List.svelte";
    import Footer from "./components/footer/Footer.svelte";
	import Detail from "./components/detail/Detail.svelte";
	import { arrays } from "./components/items/Items";

    // Variant
	let y, w, way, 
            items = arrays,
            beforeScroll = 0, 
            motions = [], 
            detailItem = items[0], 
            visible = false,
			loaded = false;
	$: sort = 0;

    // Lenis
    const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);
	// lenis.on('scroll', ({scroll}) => scrollActive(scroll));

    // Function
    function scrollActive(pos){
        motions.forEach((x, i) => {
            if(x != null) items[i].show  = x.offsetTop < (pos+window.innerHeight) / 1.1? true: items[i].show ;
		});
    }
	function gnbClick(i){
		sort = i;
		items.forEach(x => x.show = x.type == i? true: x.show);
		items = items;
	}
	function detailShow(item){
		detailItem = item;
		visible = true;
		document.documentElement.classList.add('forbid_scroll');
		location.hash = `${item.name}`
		lenis.stop();
	}
	function detailHide(){
		visible = false;
		document.documentElement.classList.remove('forbid_scroll');
		history.replaceState("", "", location.pathname)
		lenis.start();
	}
	function back(){
		if(location.hash != '') detailShow(detailItem);
		else detailHide();
	}
	
</script>

<svelte:window 
	bind:scrollY={y}
	bind:innerWidth={w}
	on:load={ () => {
		scrollActive(y);
		w > 1000? lenis.on('scroll', ({scroll}) => scrollActive(scroll)): lenis.destroy();
		loaded = true;
	} }
	on:resize={ () => {
		scrollActive(y);
		w > 1000? lenis.on('scroll', ({scroll}) => scrollActive(scroll)): lenis.destroy();
	} }
	on:scroll = { () => {
		if(w <= 1000){
			const h = document.querySelector('header').offsetHeight;
			scrollActive(y);
			if(y > h){
				way = beforeScroll < y? 1: -1;
				beforeScroll = y
			}
		}
	} }
	on:hashchange={back}
/>

{#if w > 1000}
{#if loaded}
    <Header { classNames } direction={ way } { gnbClick } />
{/if}
{:else}
    <Header { classNames } direction={ way } { gnbClick } />
{/if}
<main>
	<List { classNames } { items } { motions } { detailShow } { sort } />
    <Footer />
</main>
{#if visible}
<Detail { classNames } { detailItem } width={ w } title={detailItem.name} { detailHide } />
{/if}