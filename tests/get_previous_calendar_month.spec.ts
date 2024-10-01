import { get_previous_calendar_month } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

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
