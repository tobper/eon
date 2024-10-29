import { describe, expect, test } from 'vitest';
import { get_weeks_between } from '../src/get_weeks_between';

describe('get_weeks_between()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 1 }, { year: 2023, month: 1, day: 8 }, 1],
		[{ year: 2023, month: 1, day: 2 }, { year: 2023, month: 1, day: 23 }, 3],
		[{ year: 2023, month: 1, day: 1 }, { year: 2023, month: 12, day: 31 }, 52],
	])('returns number of days between dates', (first, second, expected) => {
		expect(get_weeks_between(first, second)).toBe(expected);
	});

	test('Number of weeks include partially started weeks', () => {
		const date_1 = { year: 2023, month: 1, day: 1 };
		const date_2 = { year: 2023, month: 1, day: 9 };

		expect(get_weeks_between(date_1, date_2)).toBe(2);
	});
});
