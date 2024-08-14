import { add_days } from './add_days';
import type { DateOnly, DateOnlyLike } from './date_only';

export function add_weeks(
	original_date: DateOnlyLike,
	weeks: number
): DateOnly {
	return add_days(original_date, 7 * weeks);
}
