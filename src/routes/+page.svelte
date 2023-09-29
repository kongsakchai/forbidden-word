<script lang="ts">
	import Button from '$lib/components/common/button.svelte';
	import PageTransition from '$lib/components/layout/page-transition.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<PageTransition>
	<h1 class=" mt-6 mb-4 select-none">คำต้องห้าม !!!</h1>
	<img
		src={data.url_image}
		alt="cover"
		width="512"
		height="512"
		class=" w-[200px] aspect-square object-cover"
	/>
	<Button type="submit">เข้าห้อง</Button>
	<Button>สร้างห้อง</Button>
</PageTransition>
