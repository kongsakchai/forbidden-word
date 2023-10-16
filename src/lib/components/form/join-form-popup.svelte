<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '../common';
	import Popup from '../common/popup.svelte';

	export let open = false;
</script>

<Popup {open}>
	<form
		use:enhance
		action="/?/join"
		method="post"
		class=" flex flex-col items-center gap-4 w-[250px] bg-white"
	>
		<input
			name="id"
			type="text"
			class=" outline-none border-2 border-black border-sketch px-4 py-2 text-input text-black text-center"
			placeholder="ใส่หมายเลขห้อง"
			required
		/>
		<Button type="submit">เข้าเกม</Button>
		<button type="button" on:click={() => (open = false)} class=" select-none text-button">
			ยกเลิก
		</button>
	</form>
</Popup>
