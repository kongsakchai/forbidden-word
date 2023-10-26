import { LoadGame } from '$lib/services/game.js';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const id = params.id;
	const player = locals.player;

	if (!player) throw redirect(301, '/');

	const game = LoadGame(id, player);

	if (!game) throw redirect(301, '/');

	return { player: player, game: { ...game } };
};
