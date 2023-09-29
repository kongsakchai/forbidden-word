import { writable } from 'svelte/store';

import type { IUserModel } from '$lib/models/user.model';

export const userStore = writable<IUserModel | undefined>();
