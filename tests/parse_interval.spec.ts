import { describe, expect, test } from 'vitest';
import { interval_unit } from '../src/create_interval';
import { parse_interval } from '../src/parse_interval';

const { day, week, month, year } = interval_unit;

describe('parse_interval()', () => {
	test.each([
		['1y', 1, year],
		['Yearly', 1, year],
		['Every other year', 2, year],
		['Every 3 years', 3, year],

		['2m', 2, month],
		['Monthly', 1, month],
		['Every other month', 2, month],
		['Quarterly', 3, month],
		['Every 4 months', 4, month],

		['3w', 3, week],
		['Weekly', 1, week],
		['Every other week', 2, week],
		['Every 4 weeks', 4, week],

		['14d', 14, day],
		['Daily', 1, day],
		['Every other day', 2, day],
		['Every 3 days', 3, day],
	])(`parses '%s' as %s '%s'`, (text, amount, unit) => {
		expect(parse_interval(text)).toMatchObject({ amount, unit });
	});

	test('throws when unit is invalid', () => {
		expect(() => parse_interval('1a')).toThrow(`'1a' is not a valid interval`);
	});

	test('throws when amount is invalid', () => {
		expect(() => parse_interval('ay')).toThrow(`'ay' is not a valid interval`);
	});
});
