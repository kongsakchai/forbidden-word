<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '$lib/stores/user-store';
	import Button from '../common/button.svelte';
	import Popup from '../common/popup.svelte';

	let name: string;
</script>

{#if !$userStore}
	<Popup>
		<form use:enhance method="post" action="?/save" class=" flex flex-col gap-6 w-[300px]">
			<h3 class=" select-none">ขอชื่อหน่อยจิ</h3>
			<input
				bind:value={name}
				name="name"
				type="text"
				class=" outline-none border border-black rounded px-4 py-2 text-subtitle-1 text-black text-center"
				placeholder="ใส่เลย"
			/>
			<Button type="submit">บันทึก</Button>
		</form>
	</Popup>
{/if}
