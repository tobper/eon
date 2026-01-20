import type { DateOnly } from './types.js';

export function get_date_only_key(date: DateOnly) {
	const { year, month, day } = date;

	return `${year}-${pad_number(month)}-${pad_number(day)}`;
}

function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}
