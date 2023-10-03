import { SavePlayer } from '$lib/services/player.js';
import { randomString } from '$lib/utils/random.js';

export const load = ({ locals }) => {
	return { player: locals.player };
};

export const actions = {
	save: async ({ request, cookies, locals }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const profile = formData.get('profile') as string;
		const player = locals.player;

		if (player) {
			SavePlayer(cookies, { ...player, name, profile });
		} else {
			const id = randomString();
			SavePlayer(cookies, { id, name, profile });
		}

		return { success: true };
	}
};
