import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_next_period } from '../src/get_next_period';

describe('get_next_period()', () => {
	test.each([
		[create_period(2023, 1, 1), create_period(2023, 2, 1)],
		[create_period(2023, 1, 1, '1d'), create_period(2023, 1, 2, '1d')],
		[create_period(2023, 1, 1, '2w'), create_period(2023, 1, 15, '2w')],
		[create_period(2023, 1, 1, '3m'), create_period(2023, 4, 1, '3m')],
		[create_period(2023, 1, 1, '4y'), create_period(2027, 1, 1, '4y')],
	])('returns next period', (current, expected) => {
		expect(get_next_period(current)).toMatchObject(expected);
	});
});
