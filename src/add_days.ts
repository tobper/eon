import type { DateOnly, DateOnlyLike } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';

export function add_days(
	original_date: DateOnlyLike,
	days: number
): DateOnly {
	const { year, month, day } = original_date;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCDate(new_date.getUTCDate() + days);

	return create_date_only_from_date(new_date);
}
