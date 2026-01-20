import { add_days_to_date } from './add_days_to_date.js';
import { create_calendar_month } from './create_calendar_month.js';
import { create_period } from './create_period.js';
import type { CalendarMonth, DateOnly, Period } from './types.js';

export function add_days(
	original_date: DateOnly,
	days: number
): DateOnly;

export function add_days(
	original_month: CalendarMonth,
	days: number
): CalendarMonth;

export function add_days(
	original_period: Period,
	days: number
): Period;

export function add_days(
	original: CalendarMonth | DateOnly | Period,
	days: number
): CalendarMonth | DateOnly | Period;

export function add_days(
	original: CalendarMonth | DateOnly | Period,
	days: number
): CalendarMonth | DateOnly | Period {
	if ('day' in original) {
		const new_date = add_days_to_date(original, days);

		return new_date;
	}

	if ('first_day' in original) {
		const new_start_date = add_days_to_date(original.first_day, days);
		const new_period = create_period(new_start_date, original.length);

		return new_period;
	}

	const { year, month } = original;
	const new_start_date = add_days_to_date({ year, month, day: 1 }, days);
	const new_calendar_month = create_calendar_month(new_start_date);

	return new_calendar_month;
}
