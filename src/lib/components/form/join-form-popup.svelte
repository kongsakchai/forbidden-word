<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '../common';
	import Popup from '../common/popup.svelte';

	export let open = false;

	let id: string;

	const handleSubmit = (event: Event) => {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		const id = data.get('id');

		goto(`/game/${id}`);
	};
</script>

<Popup {open}>
	<form
		on:submit|preventDefault={handleSubmit}
		method="post"
		class=" flex flex-col items-center gap-6 w-[250px] bg-white"
	>
		<input
			bind:value={id}
			name="name"
			type="text"
			class=" outline-none border-2 border-black border-sketch px-4 py-2 text-subtitle-1 text-black text-center"
			placeholder="ใส่หมายเลขห้อง"
			required
		/>
		<Button type="submit">เข้าเกม</Button>
		<button type="button" on:click={() => (open = false)} class=" select-none text-button">
			ยกเลิก
		</button>
	</form>
</Popup>
