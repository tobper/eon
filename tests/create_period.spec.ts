import { create_period } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

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

	test('returned period can be compared using less and larger than', () => {
		expect(create_period(2023, 2, 5) < create_period(2023, 2, 6)).toBeTruthy();
		expect(create_period(2023, 2, 5) > create_period(2023, 2, 4)).toBeTruthy();

		expect(create_period(2023, 2) < create_period(2023, 3)).toBeTruthy();
		expect(create_period(2023, 2) > create_period(2023, 1)).toBeTruthy();
	});
});
