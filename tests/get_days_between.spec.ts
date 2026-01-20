import { describe, expect, test } from 'vitest';
import { get_days_between } from '../src/get_days_between.js';

describe('get_days_between()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 1 }, { year: 2023, month: 1, day: 2 }, 1],
		[{ year: 2023, month: 1, day: 2 }, { year: 2023, month: 1, day: 1 }, 1],
		[{ year: 2023, month: 2, day: 1 }, { year: 2023, month: 3, day: 1 }, 28],
		[{ year: 2023, month: 4, day: 1 }, { year: 2023, month: 5, day: 1 }, 30],
		[{ year: 2023, month: 12, day: 15 }, { year: 2024, month: 1, day: 15 }, 31],
	])('returns number of days between dates', (first, second, expected) => {
		expect(get_days_between(first, second)).toBe(expected);
	});
});
