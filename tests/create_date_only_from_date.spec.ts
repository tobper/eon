import { describe, expect, test } from 'vitest';
import { create_date_only_from_date } from '../src/create_date_only_from_date.js';

describe('create_date_only_from_date()', () => {
	test('returns DateOnly based on date', () => {
		expect(create_date_only_from_date(new Date(2023, 1, 5))).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});
});
