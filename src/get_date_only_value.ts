import type { DateOnly } from './create_date_only.js';

export function get_date_only_value(date: DateOnly) {
	const { year, month, day } = date;

	return year * 10000 + month * 100 + day;
}
