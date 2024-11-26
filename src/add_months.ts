import { create_calendar_month, type CalendarMonth } from './create_calendar_month.js';
import { type DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import { create_period, type Period } from './create_period.js';

export function add_months(
	original_date: DateOnly,
	months: number
): DateOnly;

export function add_months(
	original_month: CalendarMonth,
	months: number
): CalendarMonth;

export function add_months(
	original_period: Period,
	months: number
): Period;

export function add_months(
	original: CalendarMonth | DateOnly | Period,
	months: number
): CalendarMonth | DateOnly | Period;

export function add_months(
	original: CalendarMonth | DateOnly | Period,
	months: number
): CalendarMonth | DateOnly | Period {
	if ('day' in original) {
		const new_date = add_months_to_date(original, months);

		return new_date;
	}

	if ('first_day' in original) {
		const new_start_date = add_months_to_date(original.first_day, months);
		const new_period = create_period(new_start_date, original.length);

		return new_period;
	}

	const { year, month } = original;
	const new_start_date = add_months_to_date({ year, month, day: 1 }, months);
	const new_calendar_month = create_calendar_month(new_start_date);

	return new_calendar_month;
}

function add_months_to_date(original: DateOnly, months: number) {
	const { year, month, day } = original;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCMonth(new_date.getUTCMonth() + months);

	return create_date_only_from_date(new_date);
}
