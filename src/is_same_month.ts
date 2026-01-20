import type { CalendarMonth } from './types.js';

export function is_same_month(
	date_1: CalendarMonth,
	date_2: CalendarMonth
): boolean {
	return (
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
