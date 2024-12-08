import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_previous_period } from '../src/get_previous_period';

describe('get_previous_period()', () => {
	test.each([
		[create_period(2023, 1, 1), create_period(2022, 12, 1)],
		[create_period(2023, 1, 1, '1d'), create_period(2022, 12, 31, '1d')],
		[create_period(2023, 1, 1, '2w'), create_period(2022, 12, 18, '2w')],
		[create_period(2023, 1, 1, '3m'), create_period(2022, 10, 1, '3m')],
		[create_period(2023, 1, 1, '4y'), create_period(2019, 1, 1, '4y')],
	])('returns previous period', (current, expected) => {
		expect(get_previous_period(current)).toMatchObject(expected);
	});
});
