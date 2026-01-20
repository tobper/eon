import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period.js';
import { get_period_key } from '../src/get_period_key.js';

describe('get_period_key()', () => {
	test.each([
		[create_period(2023, 1, 15), '2023-01-15-1m'],
		[create_period(2023, 1, 15, '2d'), '2023-01-15-2d'],
		[create_period(2023, 1, 15, '3w'), '2023-01-15-3w'],
		[create_period(2023, 1, 15, '4m'), '2023-01-15-4m'],
		[create_period(2023, 1, 15, '5y'), '2023-01-15-5y'],
	])('returns period as a key', (period, key) => {
		expect(get_period_key(period)).toEqual(key);
	});
});
