import { describe, expect, test } from 'vitest';
import { compare_dates } from '../src/compare_dates.js';

describe('compare_dates()', () => {
	test('returns -1 when the first date is earlier than the second date', () => {
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2023, month: 3, day: 4 })).toEqual(-1);
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2023, month: 4, day: 2 })).toEqual(-1);
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2024, month: 2, day: 2 })).toEqual(-1);
	});

	test('returns 0 when the first date is the same as the second date', () => {
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2023, month: 3, day: 3 })).toEqual(0);
	});

	test('returns 1 when the first date is later than the second date', () => {
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2023, month: 3, day: 2 })).toEqual(1);
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2023, month: 2, day: 4 })).toEqual(1);
		expect(compare_dates({ year: 2023, month: 3, day: 3 }, { year: 2022, month: 4, day: 4 })).toEqual(1);
	});
});
