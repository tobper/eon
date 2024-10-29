import { describe, expect, test } from 'vitest';
import { add_interval } from '../src/add_interval';
import { interval_unit } from '../src/create_interval';

const { year, month, day } = interval_unit;

describe('add_interval()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 5 }, { amount: 1, unit: year }, { year: 2024, month: 1, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, { amount: 2, unit: month }, { year: 2023, month: 3, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, { amount: 3, unit: day }, { year: 2023, month: 1, day: 8 }],
	])('returns new date with added interval', (original, interval, expected) => {
		expect(add_interval(original, interval)).toMatchObject(expected);
	});
});
