import { add_weeks } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('add_weeks()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 5 }, 1, { year: 2023, month: 1, day: 12 }],
		[{ year: 2023, month: 1, day: 12 }, -1, { year: 2023, month: 1, day: 5 }],
		[{ year: 2023, month: 1, day: 5 }, -1, { year: 2022, month: 12, day: 29 }],
	])('returns new date with added weeks', (original, weeks, expected) => {
		expect(add_weeks(original, weeks)).toMatchObject(expected);
	});
});
