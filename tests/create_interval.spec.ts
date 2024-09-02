import { create_interval, interval_unit, type IntervalUnit } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

const { day, week, month, year } = interval_unit;

describe('create_interval()', () => {
	test('returns a new interval', () => {
		expect(create_interval(1, day)).toMatchObject({ amount: 1, unit: day });
		expect(create_interval(2, week)).toMatchObject({ amount: 2, unit: week });
		expect(create_interval(3, month)).toMatchObject({ amount: 3, unit: month });
		expect(create_interval(4, year)).toMatchObject({ amount: 4, unit: 'y' });
		expect(create_interval({ amount: 1, unit: day })).toMatchObject({ amount: 1, unit: day });
		expect(create_interval({ amount: 2, unit: week })).toMatchObject({ amount: 2, unit: week });
		expect(create_interval({ amount: 3, unit: month })).toMatchObject({ amount: 3, unit: month });
		expect(create_interval({ amount: 4, unit: year })).toMatchObject({ amount: 4, unit: year });
	});

	describe('return value contains text representation', () => {
		test.each([
			[1, year, 'Yearly'],
			[2, year, 'Every other year'],
			[3, year, 'Every 3 years'],

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
		])(`returns %s '%s' as '%s'`, (amount, unit, text) => {
			expect(create_interval(amount, unit).text).toBe(text);
		});
	});

	test('throws when amount is invalid', () => {
		expect(() => create_interval(0, year)).toThrow(`Amount can't be less than 1`);
		expect(() => create_interval(-1, year)).toThrow(`Amount can't be less than 1`);
	});

	test('throws when unit is invalid', () => {
		expect(() => create_interval(1, 'x' as IntervalUnit)).toThrow('Invalid unit');
	});
});
