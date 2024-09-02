import { create_calendar_month, type CalendarMonth, type CalendarMonthArgs } from './create_calendar_month.js';
import { extract_calendar_args } from './internal/extract_calendar_args.js';

export function get_next_calendar_month(...args: CalendarMonthArgs): CalendarMonth {
	const { year, month } = extract_calendar_args(...args);

	return month === 12
		? create_calendar_month(year + 1, 1)
		: create_calendar_month(year, month + 1);
}
