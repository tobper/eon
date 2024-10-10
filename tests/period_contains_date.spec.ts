import { create_period, period_contains_date } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('period_contains_date()', () => {
	test('returns true when date is contained in period', () => {
		const period = create_period({ year: 2021, month: 2, day: 5 });

		expect(period_contains_date(period, { year: 2021, month: 2, day: 4 })).toEqual(false);
		expect(period_contains_date(period, { year: 2021, month: 2, day: 5 })).toEqual(true);
		expect(period_contains_date(period, { year: 2021, month: 3, day: 4 })).toEqual(true);
		expect(period_contains_date(period, { year: 2021, month: 3, day: 5 })).toEqual(false);
	});
});
