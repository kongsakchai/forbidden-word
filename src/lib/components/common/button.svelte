<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button {type} on:click class="btn p-0 relative mt-2">
	<div class=" min-w-[150px] px-4 py-2 bg-white border-2 border-black border-sketch"><slot /></div>
</button>

<style class="postcss">
	:root {
		--hover: -8px;
		--hover-after: 8px;
	}

	button {
		transform: translateY(var(--hover));
		transition: all 0.1s;
	}

	button:active {
		--hover: 0px;
		--hover-after: 0px;
	}

	button::after {
		display: block;
		content: '';
		position: absolute;
		box-sizing: border-box;

		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		z-index: -1;

		background-image: repeating-linear-gradient(
			45deg,
			#292929 0px,
			#292929 2px,
			#ffffff 2px,
			#ffffff 7px
		);

		transform: translateY(var(--hover-after));
		transition: all 0.1s;

		border-top-left-radius: 100px 15px;
		border-top-right-radius: 15px 225px;
		border-bottom-right-radius: 225px 15px;
		border-bottom-left-radius: 15px 255px;

		@apply border-black border-2 bg-white;
	}
</style>
