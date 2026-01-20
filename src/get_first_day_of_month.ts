import { create_date_only } from './create_date_only.js';
import type { CalendarMonth, DateOnly } from './types.js';

export function get_first_day_of_month(calendar_month: CalendarMonth): DateOnly {
	const { year, month } = calendar_month;

	return create_date_only({ year, month, day: 1 });
}
