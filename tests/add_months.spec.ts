import { describe, expect, test } from 'vitest';
import { add_months } from '../src/add_months.js';
import { create_calendar_month } from '../src/create_calendar_month.js';
import { create_date_only } from '../src/create_date_only.js';
import { create_period } from '../src/create_period.js';

describe('add_months()', () => {
	test.each([
		{
			months_to_add: 1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 2, 5)
		},
		{
			months_to_add: -1,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2022, 12, 5)
		},
		{
			months_to_add: -5,
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2022, 8, 5)
		},
	])('returns new date with added months', ({ original, months_to_add, expected }) => {
		expect(add_months(original, months_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			months_to_add: 1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2023, 2)
		},
		{
			months_to_add: -1,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2022, 12)
		},
		{
			months_to_add: -5,
			original: create_calendar_month(2023, 1),
			expected: create_calendar_month(2022, 8)
		},
	])('returns new calendar month with added months', ({ original, months_to_add, expected }) => {
		expect(add_months(original, months_to_add)).toMatchObject(expected);
	});

	test.each([
		{
			months_to_add: 1,
			original: create_period(2023, 1, 1),
			expected: create_period(2023, 2, 1)
		},
		{
			months_to_add: -1,
			original: create_period(2023, 1, 2),
			expected: create_period(2022, 12, 2)
		},
		{
			months_to_add: -5,
			original: create_period(2023, 1, 3),
			expected: create_period(2022, 8, 3)
		},
	])('returns new period with added months', ({ original, months_to_add, expected }) => {
		expect(add_months(original, months_to_add)).toMatchObject(expected);
	});

	test('returns new period with same length', () => {
		const original = create_period(2023, 1, 1, '2w');
		const result = add_months(original, 1);

		expect(result).toMatchObject(create_period(2023, 2, 1, '2w'));
	});
});
