import { add_days } from './add_days.js';
import type { DateOnly } from './create_date_only.js';

export function add_weeks(
	original_date: DateOnly,
	weeks: number
): DateOnly {
	return add_days(original_date, 7 * weeks);
}
