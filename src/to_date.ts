import type { DateOnly } from './create_date_only.js';

export function to_date(date: DateOnly) {
	return new Date(date.year, date.month - 1, date.day);
}
