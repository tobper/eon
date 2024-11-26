import { describe, expect, test } from 'vitest';
import { create_calendar_month, create_date_only, create_period } from '../src';
import { add_days } from '../src/add_days';

describe('add_days()', () => {
	test.each([
		{
			days_to_add: 1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 1, 6)
		},
		{
			days_to_add: -1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 1, 4)
		},
		{
			days_to_add: -5,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2022, 12, 31)
		},
	])('returns new date with added days', ({ original, days_to_add, expected }) => {
		expect(add_days(original, days_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			days_to_add: 1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 1)
		},
		{
			days_to_add: -1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2022, 12)
		},
		{
			days_to_add: 30,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 1)
		},
		{
			days_to_add: 31,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 2)
		},
	])('returns new calendar month with added days', ({ original, days_to_add, expected }) => {
		expect(add_days(original, days_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			days_to_add: 1,
			original: create_period(2023, 1, 1),
			expected: create_period(2023, 1, 2)
		},
		{
			days_to_add: -1,
			original: create_period(2023, 1, 1),
			expected: create_period(2022, 12, 31)
		},
		{
			days_to_add: 1,
			original: create_period(2023, 1, 31),
			expected: create_period(2023, 2, 1)
		},
	])('returns new period with added days', ({ original, days_to_add, expected }) => {
		expect(add_days(original, days_to_add)).toMatchObject(expected);
	});

	test('returns new period with same length', () => {
		const original = create_period(2023, 1, 31, '2w');
		const result = add_days(original, 1);

		expect(result).toMatchObject(create_period(2023, 2, 1, '2w'));
	});
});
