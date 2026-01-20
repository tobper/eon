import type { CalendarMonth } from './types.js';

export function get_calendar_month_key(date: CalendarMonth) {
	const { year, month } = date;

	return `${year}-${pad_number(month)}`;
}

function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}
