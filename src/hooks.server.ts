import { GetPlayer } from '$lib/services/player';
import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const player = GetPlayer(event.cookies);

	if (!player && event.url.pathname !== '/') {
		throw redirect(301, '/');
	}

	event.locals.player = player;
	const response = await resolve(event);

	return response;
};
