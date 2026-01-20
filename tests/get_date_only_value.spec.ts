import { describe, expect, test } from 'vitest';
import { get_date_only_value } from '../src/get_date_only_value.js';

describe('get_date_only_value()', () => {
	test('returns date as a number', () => {
		expect(get_date_only_value({ year: 2023, month: 1, day: 15 })).toEqual(20230115);
	});
});
