import type { CalendarMonth } from './create_calendar_month.js';
import { create_calendar_month_from_date } from './create_calendar_month_from_date.js';
import type { DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import type { Period } from './create_period.js';
import { create_period_from_date } from './create_period_from_date.js';

export function add_years(
	original_date: DateOnly,
	years: number
): DateOnly;

export function add_years(
	original_date: CalendarMonth,
	years: number
): CalendarMonth;

export function add_years(
	original_period: Period,
	years: number
): Period;

export function add_years(
	original_date: CalendarMonth | DateOnly | Period,
	years: number
) {
	if ('first_day' in original_date) {
		const new_date = get_new_date(original_date.first_day, years);

		return create_period_from_date(new_date);
	}

	if ('day' in original_date) {
		const new_date = get_new_date(original_date, years);

		return create_date_only_from_date(new_date);
	}

	const { year, month } = original_date;
	const new_date = get_new_date({ year, month, day: 1 }, years);

	return create_calendar_month_from_date(new_date);
}

function get_new_date(old_date: DateOnly, years: number) {
	const { year, month, day } = old_date;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCFullYear(new_date.getUTCFullYear() + years);

	return new_date;
}
