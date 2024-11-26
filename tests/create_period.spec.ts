import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';

describe('create_period()', () => {
	test('returns a new period', () => {
		expect(create_period({ year: 2023, month: 1 })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 1, day: 31 },
		});

		expect(create_period({ year: 2023, month: 2, day: 3 })).toMatchObject({
			first_day: { year: 2023, month: 2, day: 3 },
			last_day: { year: 2023, month: 3, day: 2 },
		});
	});

	test('returns a new period with custom length', () => {
		expect(create_period({ year: 2023, month: 1, day: 1 }, { amount: 2, unit: 'd' })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 1, day: 2 },
		});

		expect(create_period({ year: 2023, month: 1, day: 1 }, { amount: 2, unit: 'w' })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 1, day: 14 },
		});

		expect(create_period({ year: 2023, month: 1, day: 1 }, { amount: 2, unit: 'm' })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2023, month: 2, day: 28 },
		});

		expect(create_period({ year: 2023, month: 1, day: 1 }, { amount: 2, unit: 'y' })).toMatchObject({
			first_day: { year: 2023, month: 1, day: 1 },
			last_day: { year: 2024, month: 12, day: 31 },
		});
	});
});
