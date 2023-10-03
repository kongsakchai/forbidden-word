import type { IPlayer } from './player.model';

export interface IGame {
	id: string;
	status: GameStatusEnum;
	players: IPlayerInGame[];
}

export interface IPlayerInGame extends IPlayer {
	word?: string;
	status: PlayerStatusEnum;
}

export enum GameStatusEnum {
	WAIT = 'wait',
	START = 'start',
	END = 'end'
}

export enum PlayerStatusEnum {
	ALIVE = 'alive',
	DIED = 'died'
}

export class Game implements IGame {
	status: GameStatusEnum;
	players: IPlayerInGame[];

	constructor(readonly id: string) {
		this.status = GameStatusEnum.WAIT;
		this.players = [];
	}

	public join(player: IPlayer): void {
		this.players.push({ ...player, status: PlayerStatusEnum.ALIVE });
	}

	public isWait(): boolean {
		return this.status === GameStatusEnum.WAIT;
	}

	public isEnd(): boolean {
		return this.status === GameStatusEnum.START;
	}

	public toData(): IGame {
		return this;
	}
}
