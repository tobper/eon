import type { CalendarMonth } from './create_calendar_month.js';

export function is_same_month(
	date_1: CalendarMonth
): (date_2: CalendarMonth) => boolean;

export function is_same_month(
	date_1: CalendarMonth,
	date_2: CalendarMonth
): boolean;

export function is_same_month(
	...args:
		| [date_1: CalendarMonth]
		| [date_1: CalendarMonth, date_2: CalendarMonth]
) {
	if (args.length === 1)
		return (date_2: CalendarMonth) => is_same_month(args[0], date_2);

	const [date_1, date_2] = args;

	return (
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
