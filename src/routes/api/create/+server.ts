import { CreateGame } from '$lib/services/game.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const id = CreateGame();

	return json({ id: id });
};
