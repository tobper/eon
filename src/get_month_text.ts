import type { CalendarMonth } from './create_calendar_month';
import { eon } from './eon';

export function get_month_text(
	month: number,
	format?: 'long' | 'short'
): string

export function get_month_text(
	date: CalendarMonth,
	format?: 'long' | 'short'
): string

export function get_month_text(
	arg: number | CalendarMonth,
	format: 'long' | 'short' = 'short'
) {
	const month = typeof arg === 'number' ? arg : arg.month;
	const months = format === 'long'
		? eon.months_long
		: eon.months_short;

	return months[month - 1];
}
