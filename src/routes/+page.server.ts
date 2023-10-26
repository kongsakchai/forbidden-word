import type { IPlayer } from '$lib/models/player.model.js';
import { CreateGame, JoinGame, StartGame } from '$lib/services/game.js';
import { SavePlayer } from '$lib/services/player.js';
import { randomString } from '$lib/utils/random.js';
import { redirect } from '@sveltejs/kit';

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
	},
	create: async ({ locals }) => {
		const player = locals.player;

		if (!player) return { success: false };

		const id = CreateGame(player);

		return gotoGame(id, player);
	},
	join: async ({ request, locals }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;
		const player = locals.player;

		return gotoGame(id, player);
	},
	start: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;
		StartGame(id);

		return { success: true };
	}
};

const gotoGame = (id: string, player: IPlayer | null) => {
	if (!player) return { success: false };

	const game = JoinGame(id, player);

	if (!game) return { success: false };

	throw redirect(301, `/game/${id}`);
};
