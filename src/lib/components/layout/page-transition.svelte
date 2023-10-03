<script>
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
</script>

<main
	class="{navigating
		? 'absolute'
		: ''} md:w-[700px] xs:w-[500px] w-full min-h-screen flex flex-col items-center gap-4"
>
	<slot />
</main>
