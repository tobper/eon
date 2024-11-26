import { add_days } from './add_days.js';
import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';

export function add_weeks(
	original_date: DateOnly,
	weeks: number
): DateOnly;

export function add_weeks(
	original_month: CalendarMonth,
	weeks: number
): CalendarMonth;

export function add_weeks(
	original_period: Period,
	weeks: number
): Period;

export function add_weeks(
	original: CalendarMonth | DateOnly | Period,
	weeks: number
): CalendarMonth | DateOnly | Period;

export function add_weeks(
	original: CalendarMonth | DateOnly | Period,
	weeks: number
): CalendarMonth | DateOnly | Period {
	return add_days(original, 7 * weeks);
}
