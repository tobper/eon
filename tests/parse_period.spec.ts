import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { parse_period } from '../src/parse_period';

describe('parse_period()', () => {
	test.each([
		['2020-01-01-1m', create_period(2020, 1, 1)],
		['2020-01-01-2d', create_period(2020, 1, 1, '2d,')],
		['2020-01-01-3w', create_period(2020, 1, 1, '3w,')],
		['2020-01-01-4m', create_period(2020, 1, 1, '4m')],
		['2020-01-01-50y', create_period(2020, 1, 1, '50y')],
	])(`parses '%s'`, (text, period) => {
		expect(parse_period(text)).toMatchObject(period);
	});
});
