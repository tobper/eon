import { create_calendar_month, type CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import { create_period, type Period } from './create_period.js';

export function add_years(
	years: number
): {
	(original: DateOnly): DateOnly;
	(original: CalendarMonth): CalendarMonth;
	(original: Period): Period;
	(original: CalendarMonth | DateOnly | Period): CalendarMonth | DateOnly | Period;
};

export function add_years(
	original: DateOnly,
	years: number
): DateOnly;

export function add_years(
	original: CalendarMonth,
	years: number
): CalendarMonth;

export function add_years(
	original: Period,
	years: number
): Period;

export function add_years(
	original: CalendarMonth | DateOnly | Period,
	years: number
): CalendarMonth | DateOnly | Period;

export function add_years(
	...args:
		| [years: number]
		| [original: CalendarMonth | DateOnly | Period, years: number]
) {
	if (args.length === 1)
		return (original: CalendarMonth | DateOnly | Period) => add_years(original, args[0]);

	const [original, years] = args;

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

function add_years_to_date(original: DateOnly, years: number) {
	const { year, month, day } = original;
	const new_date = new Date(Date.UTC(year, month - 1, day));

	new_date.setUTCFullYear(new_date.getUTCFullYear() + years);

	return create_date_only_from_date(new_date);
}
