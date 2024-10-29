import { describe, expect, test } from 'vitest';
import { add_months } from '../src/add_months';

describe('add_months()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 5 }, 1, { year: 2023, month: 2, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, -1, { year: 2022, month: 12, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, -5, { year: 2022, month: 8, day: 5 }],
	])('returns new date with added months', (original, months, expected) => {
		expect(add_months(original, months)).toMatchObject(expected);
	});

	test.each([
		[{ year: 2023, month: 1 }, 1, { year: 2023, month: 2 }],
		[{ year: 2023, month: 1 }, -1, { year: 2022, month: 12 }],
		[{ year: 2023, month: 1 }, -5, { year: 2022, month: 8 }],
	])('returns new calendar month with added months', (original, months, expected) => {
		expect(add_months(original, months)).toMatchObject(expected);
	});

	test.each([
		[{ first_day: { year: 2023, month: 1, day: 1 } }, 1, { first_day: { year: 2023, month: 2, day: 1 } }],
		[{ first_day: { year: 2023, month: 1, day: 2 } }, -1, { first_day: { year: 2022, month: 12, day: 2 } }],
		[{ first_day: { year: 2023, month: 1, day: 3 } }, -5, { first_day: { year: 2022, month: 8, day: 3 } }],
	])('returns new period with added months', (original, months, expected) => {
		expect(add_months(original, months)).toMatchObject(expected);
	});
});
