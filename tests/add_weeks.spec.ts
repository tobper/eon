import { describe, expect, test } from 'vitest';
import { add_weeks } from '../src/add_weeks';
import { create_calendar_month } from '../src/create_calendar_month';
import { create_date_only } from '../src/create_date_only';
import { create_period } from '../src/create_period';

describe('add_weeks()', () => {
	test.each([
		{
			weeks_to_add: 1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 1, 12)
		},
		{
			weeks_to_add: -1,
			original: create_date_only(2023, 1, 12),
			expected: create_date_only(2023, 1, 5)
		},
		{
			weeks_to_add: -1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2022, 12, 29)
		},
	])('returns new date with added weeks', ({ original, weeks_to_add, expected }) => {
		expect(add_weeks(original, weeks_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			weeks_to_add: 1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 1)
		},
		{
			weeks_to_add: -1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2022, 12)
		},
		{
			weeks_to_add: 4,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 1)
		},
		{
			weeks_to_add: 5,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 2)
		},
	])('returns new calendar month with added weeks', ({ original, weeks_to_add, expected }) => {
		expect(add_weeks(original, weeks_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			weeks_to_add: 1,
			original: create_period(2023, 1, 1),
			expected: create_period(2023, 1, 8)
		},
		{
			weeks_to_add: -1,
			original: create_period(2023, 1, 1),
			expected: create_period(2022, 12, 25)
		},
		{
			weeks_to_add: 1,
			original: create_period(2023, 1, 31),
			expected: create_period(2023, 2, 7)
		},
	])('returns new period with added weeks', ({ original, weeks_to_add, expected }) => {
		expect(add_weeks(original, weeks_to_add)).toMatchObject(expected);
	});

	test('returns new period with same length', () => {
		const original = create_period(2023, 1, 31, '2w');
		const result = add_weeks(original, 1);

		expect(result).toMatchObject(create_period(2023, 2, 7, '2w'));
	});
});
