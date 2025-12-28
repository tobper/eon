import { describe, expect, test } from 'vitest';
import { create_calendar_month } from '../src/create_calendar_month';
import { get_month_text } from '../src/get_month_text';

describe('get_month_text()', () => {
	test.each([
		{ month: 1, format: undefined, expected: 'Jan' },
		{ month: 2, format: 'short' as const, expected: 'Feb' },
		{ month: 3, format: 'long' as const, expected: 'March' },
	])('returns correct plural suffix for months', ({ month, format, expected }) => {
		expect(get_month_text(month, format)).toBe(expected);
	});

	test.each([
		{ month: create_calendar_month(2025, 6), format: undefined, expected: 'Jun' },
		{ month: create_calendar_month(2025, 7), format: 'short' as const, expected: 'Jul' },
		{ month: create_calendar_month(2025, 8), format: 'long' as const, expected: 'August' },
	])('returns correct plural suffix for calendar months', ({ month, format, expected }) => {
		expect(get_month_text(month, format)).toBe(expected);
	});
});
