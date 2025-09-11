import { describe, expect, test } from 'vitest';
import { add_interval } from '../src/add_interval';
import { create_date_only } from '../src/create_date_only';
import { create_interval } from '../src/create_interval';
import { create_period } from '../src/create_period';

describe('add_interval()', () => {
	test.each([
		{
			interval_to_add: create_interval(1, 'y'),
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2024, 1, 5)
		},
		{
			interval_to_add: create_interval(2, 'm'),
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 3, 5)
		},
		{
			interval_to_add: create_interval(3, 'w'),
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 1, 26)
		},
		{
			interval_to_add: create_interval(4, 'd'),
			original: create_date_only(2023, 1, 5),
			expected: create_date_only(2023, 1, 9)
		},
	])('returns new date with added interval', ({ original, interval_to_add, expected }) => {
		expect(add_interval(original, interval_to_add)).toMatchObject(expected);
		expect(add_interval(interval_to_add)(original)).toMatchObject(expected);
	});

	test('returns new period with same length', () => {
		const original = create_period(2023, 1, 1, '2w');
		const result = add_interval(original, { amount: 1, unit: 'm' });

		expect(result).toMatchObject(create_period(2023, 2, 1, '2w'));
	});
});
