<script>
	import { fly } from 'svelte/transition';
	import Backdrop from './backdrop.svelte';

	export let open = false;
</script>

{#if open}
	<Backdrop>
		<div transition:fly={{ y: 100 }} class="border-2 border-black rounded p-6 bg-white">
			<slot />
		</div>
	</Backdrop>
{/if}
