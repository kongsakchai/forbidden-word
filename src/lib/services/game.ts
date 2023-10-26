import { Game } from '$lib/models/game.model';
import type { IPlayer } from '$lib/models/player.model';
import { randomNumber } from '$lib/utils/random';

import { APP_ID, SECRET } from '$env/static/private';
import { PUBLIC_KEY, PUBLIC_CLUSTER } from '$env/static/public';

import Pusher from 'pusher';

const pusher = new Pusher({
	appId: APP_ID,
	secret: SECRET,
	key: PUBLIC_KEY,
	cluster: PUBLIC_CLUSTER
});
const games = new Map<string, Game>();

export const CreateGame = (player: IPlayer) => {
	let id = randomNumber().toString();

	while (games.has(id)) {
		id = randomNumber().toString();
	}

	games.set(id, new Game(id, player.id));

	return id;
};

export const JoinGame = (id: string, player: IPlayer) => {
	const game = games.get(id);

	if (!game) return null;

	const hasPlayer = game.hasPlayer(player);

	if (game.isWait() || hasPlayer) {
		if (!hasPlayer) {
			game.join(player);
			pusher.trigger(id, 'game', game.toData());
		}

		return game;
	}

	return null;
};

export const LoadGame = (id: string, player: IPlayer) => {
	const game = games.get(id);

	if (game?.hasPlayer(player)) return game.toData();

	return null;
};

export const StartGame = (id: string) => {
	const game = games.get(id);

	if (game) {
		game.start();
		pusher.trigger(id, 'game', game.toData());
	}
};
