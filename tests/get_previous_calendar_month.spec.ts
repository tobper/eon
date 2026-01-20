import { describe, expect, test } from 'vitest';
import { get_previous_calendar_month } from '../src/get_previous_calendar_month.js';

describe('get_previous_calendar_month()', () => {
	test.each([
		{
			current: { year: 2023, month: 1 },
			expected: { year: 2022, month: 12 }
		},
		{
			current: { year: 2023, month: 12 },
			expected: { year: 2023, month: 11 }
		},
	])('returns the previous month', ({ current, expected }) => {
		expect(get_previous_calendar_month(current)).toMatchObject(expected);
	});
});
