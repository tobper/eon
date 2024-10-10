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
});
