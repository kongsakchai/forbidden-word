<script lang="ts">
	import Pusher from 'pusher-js';
	import { onMount } from 'svelte';

	import { GameStatusEnum, type IGame } from '$lib/models/game.model';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { Button, Profile } from '$lib/components/common';
	import { PageTransition } from '$lib/components/layout';

	import { PUBLIC_KEY, PUBLIC_CLUSTER } from '$env/static/public';

	export let data: PageData;

	let game: IGame = data.game;

	onMount(() => {
		const pusher = new Pusher(PUBLIC_KEY, { cluster: PUBLIC_CLUSTER });
		const channel = pusher.subscribe(game.id);

		channel.bind('game', (data: IGame) => {
			game = data;
		});

		return () => {
			channel.unsubscribe();
		};
	});
</script>

<PageTransition>
	<h1 class="select-none">คำต้องห้าม</h1>
	<h3>เลขห้อง {game.id}</h3>

	<Profile {...data.player} />

	<h3>ผู้เล่นคนอื่น</h3>
	<section class=" flex gap-4 flex-wrap justify-center">
		{#each game.players as player, i (i)}
			{#if player.id !== data.player.id}
				<Profile {...player} />
			{/if}
		{/each}
	</section>

	{#if game.createBy === data.player.id && game.players.length > 1 && game.status === GameStatusEnum.WAIT}
		<form use:enhance action="/?/start" method="post">
			<input hidden value={game.id} name="id" />
			<Button type="submit">เริ่มเกม</Button>
		</form>
	{/if}
</PageTransition>
