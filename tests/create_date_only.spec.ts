import { create_date_only } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_date_only()', () => {
	test('returns a new date', () => {
		expect(create_date_only({ year: 2023, month: 2, day: 5 })).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});

	test('returned date can be compared using less and larger than', () => {
		expect(create_date_only(2023, 2, 5) < create_date_only(2023, 2, 6)).toBeTruthy();
		expect(create_date_only(2023, 2, 5) > create_date_only(2023, 2, 4)).toBeTruthy();
	});
});
