import { describe, expect, test } from 'vitest';
import { get_calendar_month_key } from '../src/get_calendar_month_key.js';

describe('get_calendar_month_key()', () => {
	test('returns calendar month as a key', () => {
		expect(get_calendar_month_key({ year: 2023, month: 1 })).toEqual('2023-01');
	});
});
