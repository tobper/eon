import type { DateOnly } from './types.js';

export function is_same_date(
	date_1: DateOnly,
	date_2: DateOnly
): boolean {
	return (
		date_1.day === date_2.day &&
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
