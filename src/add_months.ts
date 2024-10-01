import type { CalendarMonth } from './create_calendar_month.js';
import { create_calendar_month_from_date } from './create_calendar_month_from_date.js';
import type { DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import type { Period } from './create_period.js';
import { create_period_from_date } from './create_period_from_date.js';

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
	original_date: CalendarMonth | DateOnly | Period,
	months: number
) {
	if ('first_day' in original_date) {
		const new_date = get_new_date(original_date.first_day, months);

		return create_period_from_date(new_date);
	}

	if ('day' in original_date) {
		const new_date = get_new_date(original_date, months);

		return create_date_only_from_date(new_date);
	}

	const { year, month } = original_date;
	const new_date = get_new_date({ year, month, day: 1 }, months);

	return create_calendar_month_from_date(new_date);
}

function get_new_date(old_date: DateOnly, months: number) {
	const { year, month, day } = old_date;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCMonth(new_date.getUTCMonth() + months);

	return new_date;
}
