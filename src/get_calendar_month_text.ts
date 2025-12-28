import type { CalendarMonth } from './create_calendar_month.js';
import type { Period } from './create_period.js';
import { get_month_text } from './get_month_text.js';
import { is_same_month } from './is_same_month.js';

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
		const month_text = get_month_text(month, format);

		return year !== current_year
			? `${month_text} ${year}`
			: month_text;
	}
}
