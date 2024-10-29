import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_period_text } from '../src/get_period_text';

describe('get_period_text()', () => {
	test('Returns single month and year when period starts on the first', () => {
		const period = create_period(2023, 1, 1);
		expect(get_period_text(period)).toBe('January 2023');
	});

	test('Returns months and days of first and last day when period does not start on the first', () => {
		const period = create_period(2023, 1, 15);
		expect(get_period_text(period)).toBe('Jan 15 - Feb 14, 2023');
	});
});
