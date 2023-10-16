<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Button, Popup } from '../common';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let open = false;

	let name: string = $page.data.player?.name;
	let profile: number = $page.data.player?.profile || 0;
	let maxProfile: number = 15;

	const prevProfileHandle = () => {
		if (profile > 0) profile--;
		else profile = maxProfile;
	};

	const nextProfileHandle = () => {
		if (profile < maxProfile) profile++;
		else profile = 0;
	};

	const handleSumbit: SubmitFunction = (input) => {
		input.formData.set('profile', String(profile));
	};
</script>

<Popup {open}>
	<form
		use:enhance={handleSumbit}
		method="post"
		action="/?/save"
		class=" flex flex-col items-center gap-4 w-[250px] bg-white"
	>
		<section class=" flex gap-4">
			<button type="button" on:click={prevProfileHandle} class=" select-none text-button">{'<'}</button>
			<div class=" w-[120px] aspect-square select-none">
				<img
					src="/profiles/profile_{profile}.png"
					alt="cover"
					class=" w-full h-full object-cover"
				/>
			</div>
			<button type="button" on:click={nextProfileHandle} class=" select-none  text-button">{'>'}</button>
		</section>

		<input
			bind:value={name}
			name="name"
			type="text"
			class=" outline-none border-2 border-black border-sketch px-4 py-2 text-input text-black text-center"
			placeholder="ใส่ชื่อ"
			required
		/>
		<Button type="submit">บันทึก</Button>
	</form>
</Popup>
