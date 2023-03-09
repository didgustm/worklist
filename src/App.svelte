<script>
	import { onMount } from "svelte"
	import classNames from "classnames/bind"
	import Lenis from "@studio-freight/lenis"
	import Header from "@components/header/Header.svelte"
	import carImg from "@images/car-01.png"
	
	let sections = [],
	active = false,
	scrollOver = [false, false, false, false, false];

	const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	
	lenis.on('scroll', ({ scroll }) => {
		active = Math.floor(scroll) > 0? true: false;
		sections.forEach((x, i) => {
			scrollOver[i] = x.offsetTop < scroll + window.innerHeight / 1.2? true: scrollOver[i]
		});
	});

	const scrollMove = (i) => {
		lenis.scrollTo(`.sct${i}`, { offset:-72, duration:1 });
	}

	const header = {
		scrollMove: scrollMove,
		classNames: classNames
	}

	
</script>

<Header active={active} { ...header } />
<main>
	{#each Array(5) as _, idx}
		<section 
			class="{ classNames(`sct${idx+1}`, { active: scrollOver[idx] }) }"
			bind:this={sections[idx]}
		>
			<p>본문{idx+1}</p>
			{#if idx == 0}
				<img src="{ carImg }" alt="">
			{/if}
		</section>
	{/each}
</main>

<style>
	section{
		position:relative;
		display:flex;
		justify-content:center;
		align-items:center;
		height:calc(100vh - 72px);
		font-size:20px;
	}
	section p{
		transform:translateY(80px);
		opacity:0;
	}
	.active p{
		transform:translateY(0);
		opacity:1;
		transition:all 0.6s ease 0.4s
	}
	.sct1 img{
		position:absolute;
		bottom:50px;
		right:50px
	}
</style>