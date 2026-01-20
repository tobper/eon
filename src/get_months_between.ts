import type { DateOnly } from './types.js';

export function get_months_between(
	original_date: DateOnly,
	other_date: DateOnly
): number {
	const months =
		(other_date.year - original_date.year) * 12 +
		(other_date.month - original_date.month) +
		(other_date.day > original_date.day ? 1 : 0);

	return months;
}
