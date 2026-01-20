import { create_date_only_from_date } from './create_date_only_from_date.js';
import type { DateOnly } from './types.js';

export function add_years_to_date(original: DateOnly, years: number) {
	const { year, month, day } = original;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCFullYear(new_date.getUTCFullYear() + years);

	return create_date_only_from_date(new_date);
}
