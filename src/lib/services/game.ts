import { Game } from '$lib/models/game.model';
import type { IPlayer } from '$lib/models/player.model';
import { randomNumber } from '$lib/utils/random';

const games = new Map<string, Game>();

export const CreateGame = () => {
	let id = randomNumber().toString();

	while (games.has(id)) {
		id = randomNumber().toString();
	}

	games.set(id, new Game(id));

	return id;
};

export const JoinGame = (id: string, player: IPlayer) => {
	const game = games.get(id);

	if (!game) return null;

	const hasPlayer = game.hasPlayer(player);

	if (game.isWait() || hasPlayer) {
		if (!hasPlayer) game.join(player);

		return game;
	}

	return null;
};

export const LoadGame = (id: string, player: IPlayer) => {
	const game = games.get(id);

	if (!game) return null;

	if (game.hasPlayer(player)) return game.toData();

	return null;
};

export const StartGame = (id: string) => {
	const game = games.get(id);

	if (!game) return null;
};
