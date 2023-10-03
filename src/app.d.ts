// See https://kit.svelte.dev/docs/types#app

import type { IPlayer } from '$lib/models/player.model';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			player: IPlayer | null;
		}
		// interface PageData {}
		// interface Platform {}
		type CallFunction<T> = (value: T) => void | undefined;
	}
}

export {};
