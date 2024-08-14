import { format_interval, interval_unit } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

const { day, week, month, year } = interval_unit;

describe('format_interval()', () => {
	test.each([
		[1, year, 'Yearly'],
		[2, year, 'Every other year'],
		[3, year, 'Every 3 years'],
		[4, year, 'Every 4 years'],

		[1, month, 'Monthly'],
		[2, month, 'Every other month'],
		[3, month, 'Quarterly'],
		[4, month, 'Every 4 months'],

		[1, week, 'Weekly'],
		[2, week, 'Every other week'],
		[3, week, 'Every 3 weeks'],

		[1, day, 'Daily'],
		[2, day, 'Every other day'],
		[3, day, 'Every 3 days'],
		[4, day, 'Every 4 days'],
	])(`returns %s '%s' as %s`, (amount, unit, text) => {
		expect(`${format_interval({ amount, unit })}`).toEqual(text);
	});
});
