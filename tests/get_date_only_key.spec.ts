import { describe, expect, test } from 'vitest';
import { get_date_only_key } from '../src/get_date_only_key.js';

describe('get_date_only_key()', () => {
	test('returns date as a key', () => {
		expect(get_date_only_key({ year: 2023, month: 1, day: 15 })).toEqual('2023-01-15');
	});
});
