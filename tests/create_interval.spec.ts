import { describe, expect, test } from 'vitest';
import { create_interval, interval_unit, type IntervalUnit } from '../src/create_interval';

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

	test('throws when amount is invalid', () => {
		expect(() => create_interval(0, year)).toThrow(`Amount can't be less than 1`);
		expect(() => create_interval(-1, year)).toThrow(`Amount can't be less than 1`);
	});

	test('throws when unit is invalid', () => {
		expect(() => create_interval(1, 'x' as IntervalUnit)).toThrow('Invalid unit');
	});
});
