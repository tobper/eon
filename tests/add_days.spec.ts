import { add_days } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('add_days()', () => {
	test.each([
		[{ year: 2023, month: 1, day: 5 }, 1, { year: 2023, month: 1, day: 6 }],
		[{ year: 2023, month: 1, day: 5 }, -1, { year: 2023, month: 1, day: 4 }],
		[{ year: 2023, month: 1, day: 5 }, -5, { year: 2022, month: 12, day: 31 }],
	])('returns new date with added days', (original, days, expected) => {
		expect(add_days(original, days)).toMatchObject(expected);
	});
});
