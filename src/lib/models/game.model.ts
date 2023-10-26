import { randomWord } from '$lib/utils/random';
import type { IPlayer } from './player.model';

export interface IGame {
	id: string;
	createBy: string | null;
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
	createBy: string | null;

	constructor(readonly id: string, createBy: string | null) {
		this.status = GameStatusEnum.WAIT;
		this.players = [];
		this.createBy = createBy;
	}

	public join(player: IPlayer): void {
		if (!this.hasPlayer(player)) {
			this.players.push({ ...player, status: PlayerStatusEnum.ALIVE });
		}
	}

	public hasPlayer(player: IPlayer): boolean {
		return this.players.some((pl) => pl.id === player.id);
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

	public start(): void {
		const temp: string[] = [];
		let word = '';

		this.players.forEach((pl) => {
			do {
				word = randomWord();
			} while (temp.includes(word));

			pl.word = word;
		});

		this.status = GameStatusEnum.START;
	}
}
