import type { CalendarMonth } from './create_calendar_month.js';
import { create_date_only, type DateOnly } from './create_date_only.js';

export function get_first_day_of_month(calendar_month: CalendarMonth): DateOnly {
	const { year, month } = calendar_month;

	return create_date_only({ year, month, day: 1 });
}
