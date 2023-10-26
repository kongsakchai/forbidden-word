<script lang="ts">
	export let profile: string;
	export let name: string;
	export let word: string | undefined = undefined;
</script>

<div>
	<div class=" w-[100px] aspect-square rounded-full">
		<img src="/profiles/profile_{profile}.png" alt="cover" class=" w-full h-full object-cover" />
	</div>
	<p class="select-none">{name}</p>
	{#if word}
		<h4 class=" text-red mt-2">{`< ${word} >`}</h4>
	{/if}
</div>
