import type { CalendarMonth } from './create_calendar_month.js';
import type { Period } from './create_period.js';
import { is_same_month } from './is_same_month.js';

const locale = 'en';
const short_format_options: Intl.DateTimeFormatOptions = { month: 'short' };
const long_format_options: Intl.DateTimeFormatOptions = { month: 'long' };

export function get_calendar_month_text(
	period: Period,
	format?: 'long' | 'short'
): string;

export function get_calendar_month_text(
	calendar_month: CalendarMonth,
	format?: 'long' | 'short'
): string;

export function get_calendar_month_text(
	arg: Period | CalendarMonth,
	format: 'long' | 'short' = 'long'
): string {
	const today = new Date();
	const current_year = today.getFullYear();

	if ('year' in arg) {
		const calendar_month = arg;
		return format_single_month(calendar_month);
	}

	const period = arg;

	if (is_same_month(period.first_day, period.last_day)) {
		return format_single_month(period.first_day);
	}

	return `${format_single_month(period.first_day)} - ${format_single_month(period.last_day)}`;

	function format_single_month(calendar_month: { year: number, month: number; }) {
		const { year, month } = calendar_month;
		const month_text = format === 'long'
			? format_long(month)
			: format_short(month);

		return year !== current_year
			? `${month_text} ${year}`
			: month_text;
	}
}

function format_long(month: number) {
	return new Date(1, month - 1, 1).toLocaleDateString(locale, long_format_options);
}

function format_short(month: number) {
	return new Date(1, month - 1, 1).toLocaleDateString(locale, short_format_options);
}
