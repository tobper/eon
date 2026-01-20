import { create_calendar_month } from './create_calendar_month.js';
import type { CalendarMonth } from './types.js';

export function get_next_calendar_month(calendar_month: CalendarMonth): CalendarMonth {
	const { year, month } = calendar_month;

	return month === 12
		? create_calendar_month(year + 1, 1)
		: create_calendar_month(year, month + 1);
}
