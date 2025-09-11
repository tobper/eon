import { add_days } from './add_days.js';
import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';

export function add_weeks(
	weeks: number
): {
	(original: DateOnly): DateOnly;
	(original: CalendarMonth): CalendarMonth;
	(original: Period): Period;
	(original: CalendarMonth | DateOnly | Period): CalendarMonth | DateOnly | Period;
};

export function add_weeks(
	original: DateOnly,
	weeks: number
): DateOnly;

export function add_weeks(
	original: CalendarMonth,
	weeks: number
): CalendarMonth;

export function add_weeks(
	original: Period,
	weeks: number
): Period;

export function add_weeks(
	original: CalendarMonth | DateOnly | Period,
	weeks: number
): CalendarMonth | DateOnly | Period;

export function add_weeks(
	...args:
		| [weeks: number]
		| [original: CalendarMonth | DateOnly | Period, weeks: number]
) {
	if (args.length === 1)
		return (original: CalendarMonth | DateOnly | Period) => add_weeks(original, args[0]);

	const [original, weeks] = args;

	return add_days(original, 7 * weeks);
}
