<script lang="ts">
	import Profile from '$lib/components/common/profile.svelte';
	import PageTransition from '$lib/components/layout/page-transition.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageTransition>
	<h1 class="select-none">คำต้องห้าม</h1>
	<h3>เลขห้อง {data.game.id}</h3>

	<Profile {...data.player} />

	<h3>ผู้เล่นคนอื่น</h3>
	<section class=" flex gap-4 flex-wrap justify-center">
		<!-- play -->
		{#each data.game.players as player, i (i)}
			{#if player.id !== data.player.id}
				<Profile {...player} />
			{/if}
		{/each}
	</section>
</PageTransition>
