import { describe, expect, test } from 'vitest';
import { add_years } from '../src/add_years';
import { create_calendar_month } from '../src/create_calendar_month';
import { create_date_only } from '../src/create_date_only';
import { create_period } from '../src/create_period';

describe('add_years()', () => {
	test.each([
		{
			years_to_add: 1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2024, 1, 5)
		},
		{
			years_to_add: -1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2022, 1, 5)
		},
		{
			years_to_add: -5,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2018, 1, 5)
		},
	])('returns new date with added years', ({ original, years_to_add, expected }) => {
		expect(add_years(original, years_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			years_to_add: 1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2024, 1)
		},
		{
			years_to_add: -1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2022, 1)
		},
		{
			years_to_add: -5,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2018, 1)
		},
	])('returns new calendar month with added years', ({ original, years_to_add, expected }) => {
		expect(add_years(original, years_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			years_to_add: 1,
			original: create_period(2023, 1, 1),
			expected: create_period(2024, 1, 1)
		},
		{
			years_to_add: -1,
			original: create_period(2023, 1, 2),
			expected: create_period(2022, 1, 2)
		},
		{
			years_to_add: -5,
			original: create_period(2023, 1, 3),
			expected: create_period(2018, 1, 3)
		},
	])('returns new period with added years', ({ original, years_to_add, expected }) => {
		expect(add_years(original, years_to_add)).toMatchObject(expected);
	});

	test('returns new period with same length', () => {
		const original = create_period(2023, 1, 1, '2w');
		const result = add_years(original, 1);

		expect(result).toMatchObject(create_period(2024, 1, 1, '2w'));
	});
});
