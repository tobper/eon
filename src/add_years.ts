import { add_years_to_date } from './add_years_to_date.js';
import { create_calendar_month } from './create_calendar_month.js';
import { create_period } from './create_period.js';
import type { CalendarMonth, DateOnly, Period } from './types.js';

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
): CalendarMonth | DateOnly | Period;

export function add_years(
	original: CalendarMonth | DateOnly | Period,
	years: number
): CalendarMonth | DateOnly | Period {
	if ('day' in original) {
		const new_date = add_years_to_date(original, years);

		return new_date;
	}

	if ('first_day' in original) {
		const new_start_date = add_years_to_date(original.first_day, years);
		const new_period = create_period(new_start_date, original.length);

		return new_period;
	}

	const { year, month } = original;
	const new_start_date = add_years_to_date({ year, month, day: 1 }, years);
	const new_calendar_month = create_calendar_month(new_start_date);

	return new_calendar_month;
}
