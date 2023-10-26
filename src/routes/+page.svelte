<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/common';
	import Profile from '$lib/components/common/profile.svelte';
	import { UserFormPopup } from '$lib/components/form';
	import JoinFormPopup from '$lib/components/form/join-form-popup.svelte';
	import PageTransition from '$lib/components/layout/page-transition.svelte';
	import { onDestroy } from 'svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let activeUserForm = data.player === null;
	let activeJoinForm = false;

	$: if (form?.success) {
		activeUserForm = false;
	}
</script>

<UserFormPopup open={activeUserForm} />
<JoinFormPopup bind:open={activeJoinForm} />

{#if data.player}
	<PageTransition>
		<h1 class="select-none">คำต้องห้าม</h1>

		<section class=" my-4">
			<Profile {...data.player} />
			<button class=" text-link text-button mt-2" on:click={() => (activeUserForm = true)}>
				แก้ไข
			</button>
		</section>

		<Button on:click={() => (activeJoinForm = true)}>เข้าเกม</Button>

		<form use:enhance action="/?/create" method="post">
			<Button type="submit">สร้างเกม</Button>
		</form>
	</PageTransition>
{/if}
