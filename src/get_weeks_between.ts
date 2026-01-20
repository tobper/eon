import { get_days_between } from './get_days_between.js';
import type { DateOnly } from './types.js';

export function get_weeks_between(
	original_date: DateOnly,
	other_date: DateOnly
): number {
	const fractional_days = get_days_between(original_date, other_date);
	const rounded_days = Math.ceil(fractional_days / 7);

	return rounded_days;
}
