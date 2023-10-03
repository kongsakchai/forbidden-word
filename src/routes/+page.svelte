<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/common';
	import { UserFormPopup } from '$lib/components/form';
	import JoinFormPopup from '$lib/components/form/join-form-popup.svelte';
	import PageTransition from '$lib/components/layout/page-transition.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let openUserForm = data.player === null;
	let openJoinForm = data.player === null;

	$: if (form?.success) {
		openUserForm = false;
	}

	const handleCreateGame = async () => {
		const res = await fetch('/api/create');

		if (!res.ok) {
			throw res.status;
		}

		const data = await res.json();
		goto(`/game/${data.id}`);
	};
</script>

<UserFormPopup open={openUserForm} />
<JoinFormPopup bind:open={openJoinForm} />

{#if data.player}
	<PageTransition>
		<h1 class="select-none">คำต้องห้าม</h1>

		<section class=" my-4">
			<div class=" w-[120px] aspect-square rounded-full">
				<img
					src="/profiles/profile_{data.player.profile}.png"
					alt="cover"
					class=" w-full h-full object-cover"
				/>
			</div>

			<h3 class="select-none">"{data.player.name}"</h3>

			<button class=" text-link underline text-caption" on:click={() => (openUserForm = true)}
				>แก้ไข</button
			>
		</section>

		<Button on:click={() => (openJoinForm = true)}>เข้าเกม</Button>
		<Button on:click={handleCreateGame}>สร้างเกม</Button>
	</PageTransition>
{/if}
