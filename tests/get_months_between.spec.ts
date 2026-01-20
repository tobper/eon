import { describe, expect, test } from 'vitest';
import { get_months_between } from '../src/get_months_between.js';

describe('get_months_between()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 1 }, { year: 2023, month: 2, day: 1 }, 1],
		[{ year: 2023, month: 7, day: 1 }, { year: 2024, month: 1, day: 1 }, 6],
		[{ year: 2023, month: 1, day: 1 }, { year: 2024, month: 1, day: 1 }, 12],
	])('returns number of days between dates', (first, second, expected) => {
		expect(get_months_between(first, second)).toBe(expected);
	});

	test('Number of months include partially started months', () => {
		const date_1 = { year: 2023, month: 1, day: 1 };
		const date_2 = { year: 2023, month: 2, day: 2 };

		expect(get_months_between(date_1, date_2)).toBe(2);
	});
});
