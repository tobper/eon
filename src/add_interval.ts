import { add_days } from './add_days.js';
import { add_months } from './add_months.js';
import { add_weeks } from './add_weeks.js';
import { add_years } from './add_years.js';
import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Interval } from './create_interval.js';
import type { Period } from './create_period.js';
import { parse_interval } from './parse_interval.js';

export function add_interval(
	interval: Interval | string
): {
	(original: DateOnly): DateOnly;
	(original: CalendarMonth): CalendarMonth;
	(original: Period): Period;
	(original: CalendarMonth | DateOnly | Period): CalendarMonth | DateOnly | Period;
};

export function add_interval(
	original: DateOnly,
	interval: Interval | string
): DateOnly;

export function add_interval(
	original: CalendarMonth,
	interval: Interval | string
): CalendarMonth;

export function add_interval(
	original: Period,
	interval: Interval | string
): Period;

export function add_interval(
	original: CalendarMonth | DateOnly | Period,
	interval: Interval | string
): CalendarMonth | DateOnly | Period;

export function add_interval(
	...args:
		| [interval: Interval | string]
		| [original: CalendarMonth | DateOnly | Period, interval: Interval | string]
) {
	if (args.length === 1)
		return (original: CalendarMonth | DateOnly | Period) => add_interval(original, args[0]);

	const [original, interval_value] = args;
	const interval = typeof interval_value === 'string'
		? parse_interval(interval_value)
		: interval_value;

	const { amount, unit } = interval;

	switch (unit) {
		case 'y': return add_years(original, amount);
		case 'm': return add_months(original, amount);
		case 'w': return add_weeks(original, amount);
		case 'd': return add_days(original, amount);
		default: throw new Error(`Invalid interval: '${unit}'`);
	}
}
