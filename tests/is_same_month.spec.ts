import { describe, expect, test } from 'vitest';
import { is_same_month } from '../src/is_same_month';

describe('is_same_month()', () => {
	test.each([
		[{ year: 2000, month: 1 }, { year: 2000, month: 2 }, false],
		[{ year: 2000, month: 1 }, { year: 2000, month: 1 }, true],
	])('returns true if first date is same as second date', (first, second, expected) => {
		expect(is_same_month(first, second)).toBe(expected);
		expect(is_same_month(first)(second)).toBe(expected);
	});
});
