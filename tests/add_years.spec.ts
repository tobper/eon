import { add_years } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('add_years()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 5 }, 1, { year: 2024, month: 1, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, -1, { year: 2022, month: 1, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, -5, { year: 2018, month: 1, day: 5 }],
	])('returns new date with added years', (original, years, expected) => {
		expect(add_years(original, years)).toMatchObject(expected);
	});
});
