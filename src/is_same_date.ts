import type { DateOnlyLike } from './date_only';

export function is_same_date(
	date_1: DateOnlyLike,
	date_2: DateOnlyLike
): boolean {
	return (
		date_1.day === date_2.day &&
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
