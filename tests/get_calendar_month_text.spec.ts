import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_calendar_month_text } from '../src/get_calendar_month_text';

describe('get_calendar_month_text()', () => {
	const current_year = new Date().getFullYear();
	const previous_year = current_year - 1;
	const next_year = current_year + 1;
	const format = {
		short: 'short' as const,
		long: 'long' as const,
	};

	test.each([
		[{ year: current_year, month: 1 }, format.short, 'Jan'],
		[{ year: current_year, month: 1 }, format.long, 'January'],
		[{ year: current_year, month: 2 }, format.short, 'Feb'],
		[{ year: current_year, month: 2 }, format.long, 'February'],
		[{ year: previous_year, month: 1 }, format.short, `Jan ${previous_year}`],
		[{ year: previous_year, month: 1 }, format.long, `January ${previous_year}`],
		[{ year: previous_year, month: 2 }, format.short, `Feb ${previous_year}`],
		[{ year: previous_year, month: 2 }, format.long, `February ${previous_year}`],
	])('returns text, for a calendar_month, including year when it is not same as current year', (month, format, expected_text) => {
		expect(get_calendar_month_text(month, format)).toBe(expected_text);
	});

	test.each([
		[create_period(current_year, 1), `January`],
		[create_period(previous_year, 1), `January ${previous_year}`],
		[create_period(current_year, 1, 2), `January - February`],
		[create_period(previous_year, 12, 2), `December ${previous_year} - January`],
		[create_period(current_year, 12, 2), `December - January ${next_year}`],
		[create_period(next_year, 12, 2), `December ${next_year} - January ${next_year + 1}`],
	])('returns text, for a period, including year when it is not same as current year', (period, expected_text) => {
		expect(get_calendar_month_text(period)).toEqual(expected_text);
	});
});
