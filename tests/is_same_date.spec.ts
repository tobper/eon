import { describe, expect, test } from 'vitest';
import { is_same_date } from '../src/is_same_date.js';

describe('is_same_date()', () => {
	test.each([
		[{ year: 2000, month: 1, day: 1 }, { year: 2000, month: 1, day: 2 }, false],
		[{ year: 2000, month: 1, day: 1 }, { year: 2000, month: 1, day: 1 }, true],
	])('returns true if first date is same as second date', (first, second, expected) => {
		expect(is_same_date(first, second)).toBe(expected);
	});
});
