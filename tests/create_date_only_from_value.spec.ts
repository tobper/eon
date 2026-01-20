import { describe, expect, test } from 'vitest';
import { create_date_only_from_value } from '../src/create_date_only_from_value.js';

describe('create_date_only_from_value()', () => {
	test('returns DateOnly based on a number', () => {
		expect(create_date_only_from_value(20230205)).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});
});
