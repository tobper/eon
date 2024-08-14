import type { DateOnlyLike } from './date_only.js';

const ms_in_a_day = 86400e3;

export function get_days_between(
	original_date: DateOnlyLike,
	other_date: DateOnlyLike
): number {
	const first_date = Date.UTC(original_date.year, original_date.month - 1, original_date.day);
	const second_date = Date.UTC(other_date.year, other_date.month - 1, other_date.day);
	const days = (second_date - first_date) / ms_in_a_day;

	return days;
}
