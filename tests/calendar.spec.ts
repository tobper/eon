import { create_calendar_month, get_next_calendar_month, get_previous_calendar_month } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_calendar_month', () => {
	test('returns a new calendar month', () => {
		expect(create_calendar_month({ year: 2023, month: 2 })).toMatchObject({
			year: 2023,
			month: 2,
			key: '2023-02',
		});
	});

	test('returned date can be compared using less and larger than', () => {
		expect(create_calendar_month(2023, 1) < create_calendar_month(2023, 2)).toBeTruthy();
		expect(create_calendar_month(2023, 2) > create_calendar_month(2023, 1)).toBeTruthy();
	});
});

describe('get_next_calendar_month()', () => {
	test.each([
		{
			current: { year: 2023, month: 1 },
			expected: { year: 2023, month: 2, key: '2023-02' }
		},
		{
			current: { year: 2023, month: 12 },
			expected: { year: 2024, month: 1, key: '2024-01' }
		},
	])('returns the next month', ({ current, expected }) => {
		expect(get_next_calendar_month(current)).toMatchObject(expected);
	});
});

describe('get_previous_calendar_month()', () => {
	test.each([
		{
			current: { year: 2023, month: 1 },
			expected: { year: 2022, month: 12, key: '2022-12' }
		},
		{
			current: { year: 2023, month: 12 },
			expected: { year: 2023, month: 11, key: '2023-11' }
		},
	])('returns the previous month', ({ current, expected }) => {
		expect(get_previous_calendar_month(current)).toMatchObject(expected);
	});
});
