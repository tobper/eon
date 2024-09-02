import { create_calendar_month, type CalendarMonth, type CalendarMonthArgs } from './create_calendar_month.js';
import { extract_calendar_args } from './internal/extract_calendar_args.js';

export function get_previous_calendar_month(...args: CalendarMonthArgs): CalendarMonth {
	const { year, month } = extract_calendar_args(...args);

	return month === 1
		? create_calendar_month(year - 1, 12)
		: create_calendar_month(year, month - 1);
}
