import { create_calendar_month, type CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import { create_period, type Period } from './create_period.js';

export function add_days(
	months: number
): {
	(original: DateOnly): DateOnly;
	(original: CalendarMonth): CalendarMonth;
	(original: Period): Period;
	(original: CalendarMonth | DateOnly | Period): CalendarMonth | DateOnly | Period;
};

export function add_days(
	original: DateOnly,
	days: number
): DateOnly;

export function add_days(
	original: CalendarMonth,
	days: number
): CalendarMonth;

export function add_days(
	original: Period,
	days: number
): Period;

export function add_days(
	original: CalendarMonth | DateOnly | Period,
	days: number
): CalendarMonth | DateOnly | Period;

export function add_days(
	...args:
		| [days: number]
		| [original: CalendarMonth | DateOnly | Period, days: number]
) {
	if (args.length === 1)
		return (original: CalendarMonth | DateOnly | Period) => add_days(original, args[0]);

	const [original, days] = args;

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

function add_days_to_date(original_date: DateOnly, days: number) {
	const { year, month, day } = original_date;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCDate(new_date.getUTCDate() + days);

	return create_date_only_from_date(new_date);
}
