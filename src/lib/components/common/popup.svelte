<script>
	import Backdrop from './backdrop.svelte';
</script>

<Backdrop>
	<div class="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-black rounded p-6 bg-white">
		<slot />
	</div>
</Backdrop>
