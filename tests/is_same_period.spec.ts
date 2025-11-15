import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { is_same_period } from '../src/is_same_period';

describe('is_same_period()', () => {
	test.each([
		[create_period(2000, 1, 1, '1m'), create_period(2000, 1, 1, '2m'), false],
		[create_period(2000, 1, 1, '1m'), create_period(2000, 1, 1, '1d'), false],
		[create_period(2000, 1, 1, '1m'), create_period(2000, 1, 2, '1m'), false],
		[create_period(2000, 1, 1, '1m'), create_period(2000, 1, 1, '1m'), true],
	])('returns true if first period is same as second period', (first, second, expected) => {
		expect(is_same_period(first, second)).toBe(expected);
	});
});
