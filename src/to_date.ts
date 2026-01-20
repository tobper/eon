import type { DateOnly } from './types.js';

export function to_date(date: DateOnly) {
	return new Date(date.year, date.month - 1, date.day);
}
