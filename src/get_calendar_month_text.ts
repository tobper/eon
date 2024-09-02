import type { CalendarMonthArgs } from './create_calendar_month.js';
import { extract_calendar_args } from './internal/extract_calendar_args.js';

const locale = 'en';
const format_options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
};

export function get_calendar_month_text(...args: CalendarMonthArgs): string {
	const { year, month } = extract_calendar_args(...args);

	return new Date(year, month - 1, 1).toLocaleDateString(locale, format_options);
}
