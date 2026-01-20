import { create_date_only_from_date } from './create_date_only_from_date.js';
import type { DateOnly } from './types.js';

export function add_months_to_date(original: DateOnly, months: number) {
	const { year, month, day } = original;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCMonth(new_date.getUTCMonth() + months);

	return create_date_only_from_date(new_date);
}
