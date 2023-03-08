<script>
	import Lenis from "@studio-freight/lenis"
	import Header from "./components/header/Header.svelte";

	const lenis = new Lenis({
		duration: 0.6
	});
	function raf(time){
		lenis.raf(time);
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	let active = false;
	lenis.on('scroll', ({ scroll }) => {
		active = scroll > 0? true: false
	});

	const scrollMove = (i) => {
		lenis.scrollTo(`.sct0${i}`, { offset:-72, duration:1 });
	}
</script>

<Header active={active} scrollMove={scrollMove} />
<main>
	<section class="sct01">본문1</section>
	<section class="sct02">본문2</section>
	<section class="sct03">본문3</section>
	<section class="sct04">본문4</section>
	<section class="sct05">본문5</section>
</main>

<style>
	section{
		display:flex;
		justify-content:center;
		align-items:center;
		height:calc(100vh - 72px);
		font-size:20px;
	}
</style>