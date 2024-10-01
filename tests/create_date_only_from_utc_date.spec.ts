import { create_date_only_from_utc_date } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_date_only_from_utc_date()', () => {
	test.each([
		[new Date(Date.UTC(2023, 1, 5, 0, 0, 0))],
		[new Date(Date.UTC(2023, 1, 5, 23, 59, 0))],
	])('returns DateOnly based on utc date', (utcDate) => {
		expect(create_date_only_from_utc_date(utcDate)).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});

	test('returns null when provided with null', () => {
		expect(create_date_only_from_utc_date(null)).toBeNull();
	});
});
