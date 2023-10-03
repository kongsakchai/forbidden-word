import type { IPlayer } from '$lib/models/player.model';
import type { Cookies } from '@sveltejs/kit';

export const SavePlayer = (cookies: Cookies, player: IPlayer) => {
	cookies.set('player', JSON.stringify(player));
};

export const GetPlayer = (cookies: Cookies) => {
	const playerStr = cookies.get('player');

	if (playerStr) {
		return JSON.parse(playerStr);
	}

	return null;
};
