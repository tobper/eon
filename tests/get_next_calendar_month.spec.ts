import { get_next_calendar_month } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('get_next_calendar_month()', () => {
	test.each([
		{
			current: { year: 2023, month: 1 },
			expected: { year: 2023, month: 2 }
		},
		{
			current: { year: 2023, month: 12 },
			expected: { year: 2024, month: 1 }
		},
	])('returns the next month', ({ current, expected }) => {
		expect(get_next_calendar_month(current)).toMatchObject(expected);
	});
});
