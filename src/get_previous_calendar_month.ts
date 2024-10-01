import { create_calendar_month, type CalendarMonth } from './create_calendar_month.js';

export function get_previous_calendar_month(calendar_month: CalendarMonth): CalendarMonth {
	const { year, month } = calendar_month;

	return month === 1
		? create_calendar_month(year - 1, 12)
		: create_calendar_month(year, month - 1);
}
