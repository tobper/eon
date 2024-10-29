import { describe, expect, test } from 'vitest';
import { get_period_for_date } from '../src/get_period_for_date';

describe('get_period_for_date()', () => {
	test('returns period for date', () => {
		expect(get_period_for_date({ year: 2023, month: 1, day: 1 })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 1, day: 31 },
		});

		expect(get_period_for_date({ year: 2023, month: 1, day: 25 })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 1, day: 31 },
		});

		expect(get_period_for_date({ year: 2023, month: 1, day: 1 }, 25)).toMatchObject({
			first_day: { year: 2022, month: 12, day: 25 },
			last_day: { year: 2023, month: 1, day: 24 },
		});

		expect(get_period_for_date({ year: 2023, month: 1, day: 25 }, 25)).toMatchObject({
			first_day: { year: 2023, month: 1, day: 25 },
			last_day: { year: 2023, month: 2, day: 24 },
		});
	});
});
