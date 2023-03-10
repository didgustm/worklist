<script>
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte"
	import List from "./components/lists/List.svelte";
	import { resizeGridItem } from "./assets/js/resizeGridItem";
	
	let y,
		motions = [];
	const items = [
        {   
            name: "FastHunter",
            title: "FastHunter",
            type: 1,
			show: false
        },
        {   
            name: "24Bang",
            title: "이사방",
            type: 2,
			show: false
        },
        {   
            name: "제주찬가",
            title: "제주찬가",
            type: 2,
			show: false
        },
        {   
            name: "LottoFly",
            title: "로또플라이",
            type: 1,
			show: false
        }
    ]

	const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf);

	lenis.on('scroll', ({scroll}) => {
		motions.forEach((x, i) => {
			items[i].show  = x.offsetTop < (scroll+window.innerHeight) / 1.2? true: items[i].show ;
		})
	})
	
</script>

<svelte:window 
	bind:scrollY={y}
	on:load={ () => {
		resizeGridItem();
		motions.forEach((x, i) => {
			items[i].show  = x.offsetTop < (y+window.innerHeight) / 1.2? true: items[i].show ;
		})
	} }
	on:resize={ resizeGridItem }
/>

<Header classNames={ classNames } />
<main>
	<List classNames={ classNames } items={ items } motions={ motions } />
</main>

<style>

</style>