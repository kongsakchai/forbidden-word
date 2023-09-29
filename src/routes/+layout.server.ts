import { userStore } from '$lib/stores/user-store';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const str = cookies.get('user');
	if (str) {
		const user = JSON.parse(str);
		userStore.set(user);
	}
};
