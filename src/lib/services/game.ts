import { Game } from '$lib/models/game.model';
import type { IPlayer } from '$lib/models/player.model';
import { hasInGame } from '$lib/utils/hasInGame';
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

	const inGame = hasInGame(game, player);

	if (game.isWait()) {
		if (!inGame) game.join(player);
	} else if (game.isEnd() || !inGame) {
		return null;
	}

	return game.toData();
};
