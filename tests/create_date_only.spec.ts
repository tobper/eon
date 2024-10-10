import { create_date_only } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_date_only()', () => {
	test('returns a new date', () => {
		expect(create_date_only({ year: 2023, month: 2, day: 5 })).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});

	test('throws for invalid dates', () => {
		expect(() => create_date_only(2023, 0, 1)).throws('\'2023-00-01\' is not a valid date');
		expect(() => create_date_only(2023, 1, 0)).throws('\'2023-01-00\' is not a valid date');
		expect(() => create_date_only(2023, 2, 29)).throws('\'2023-02-29\' is not a valid date');
		expect(() => create_date_only(2023, 1, 32)).throws('\'2023-01-32\' is not a valid date');
	});
});
