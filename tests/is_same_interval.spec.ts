import { describe, expect, test } from 'vitest';
import { create_interval } from '../src/create_interval';
import { is_same_interval } from '../src/is_same_interval';

describe('is_same_interval()', () => {
	test.each([
		[create_interval(1, 'm'), create_interval(1, 'd'), false],
		[create_interval(1, 'm'), create_interval(2, 'm'), false],
		[create_interval(1, 'm'), create_interval(1, 'm'), true],
	])('returns true if first interval is same as second interval', (first, second, expected) => {
		expect(is_same_interval(first, second)).toBe(expected);
	});
});
