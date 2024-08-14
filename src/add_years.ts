import { create_calendar_month_from_date, type CalendarMonth, type CalendarMonthLike } from './calendar';
import { create_date_only_from_date, type DateOnly, type DateOnlyLike } from './date_only';

export function add_years(
	original_date: DateOnlyLike,
	years: number
): DateOnly;

export function add_years(
	original_date: CalendarMonthLike,
	years: number
): CalendarMonth;

export function add_years(
	original_date: CalendarMonthLike | DateOnlyLike,
	years: number
) {
	const { year, month } = original_date;
	const day = 'day' in original_date ? original_date.day : null;
	const new_date = new Date(Date.UTC(year, month - 1, day ?? 1));

	new_date.setUTCFullYear(new_date.getUTCFullYear() + years);

	return day !== null
		? create_date_only_from_date(new_date)
		: create_calendar_month_from_date(new_date);
}
