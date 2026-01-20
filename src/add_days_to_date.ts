import { create_date_only_from_date } from './create_date_only_from_date.js';
import type { DateOnly } from './types.js';

export function add_days_to_date(original_date: DateOnly, days: number) {
	const { year, month, day } = original_date;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCDate(new_date.getUTCDate() + days);

	return create_date_only_from_date(new_date);
}
