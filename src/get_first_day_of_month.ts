import type { CalendarMonthArgs } from './create_calendar_month.js';
import { create_date_only, type DateOnly } from './create_date_only.js';
import { extract_calendar_args } from './internal/extract_calendar_args.js';

export function get_first_day_of_month(...args: CalendarMonthArgs): DateOnly {
	const { year, month } = extract_calendar_args(...args);

	return create_date_only({ year, month, day: 1 });
}
