import { add_interval, interval_unit } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

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
