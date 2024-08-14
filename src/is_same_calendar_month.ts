import type { CalendarMonthLike } from './calendar.js';

export function is_same_calendar_month(
	date_1: CalendarMonthLike,
	date_2: CalendarMonthLike
): boolean {
	return (
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
