import { describe, expect, test } from 'vitest';
import { create_date_only } from '../src/create_date_only';
import { sort_dates } from '../src/sort_dates';

describe('sort_dates()', () => {
	test('returns empty array when provided with no dates', () => {
		expect(sort_dates([])).toEqual([]);
	});

	test('returns sorted dates', () => {
		const source = [
			create_date_only(2021, 1, 1),
			create_date_only(2022, 1, 1),
			create_date_only(2021, 1, 2),
			create_date_only(2020, 12, 31),
		];

		expect(sort_dates(source)).toMatchObject([
			{ year: 2020, month: 12, day: 31 },
			{ year: 2021, month: 1, day: 1 },
			{ year: 2021, month: 1, day: 2 },
			{ year: 2022, month: 1, day: 1 },
		]);
	});
});
