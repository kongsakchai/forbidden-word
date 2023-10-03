import type { IGame } from "$lib/models/game.model";
import type { IPlayer } from "$lib/models/player.model";

export const hasInGame = (game: IGame, player: IPlayer) => {
	return game.players.some((v) => v.id === player.id);
};
