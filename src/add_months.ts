import { create_calendar_month, type CalendarMonth } from './create_calendar_month.js';
import { type DateOnly } from './create_date_only.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import { create_period, type Period } from './create_period.js';

export function add_months(
	months: number
): {
	(original: DateOnly): DateOnly;
	(original: CalendarMonth): CalendarMonth;
	(original: Period): Period;
	(original: CalendarMonth | DateOnly | Period): CalendarMonth | DateOnly | Period;
};

export function add_months(
	original: DateOnly,
	months: number
): DateOnly;

export function add_months(
	original: CalendarMonth,
	months: number
): CalendarMonth;

export function add_months(
	original: Period,
	months: number
): Period;

export function add_months(
	original: CalendarMonth | DateOnly | Period,
	months: number
): CalendarMonth | DateOnly | Period;

export function add_months(
	...args:
		| [months: number]
		| [original: CalendarMonth | DateOnly | Period, months: number]
) {
	if (args.length === 1)
		return (original: CalendarMonth | DateOnly | Period) => add_months(original, args[0]);

	const [original, months] = args;

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
