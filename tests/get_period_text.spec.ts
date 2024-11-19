import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_period_text } from '../src/get_period_text';

describe('get_period_text()', () => {
	describe('When period starts on the first of the month', () => {
		test('Returns single month and year', () => {
			const period = create_period(2023, 1, 1);
			expect(get_period_text(period)).toBe('January 2023');
		});

		test('Omits year if period is current year', () => {
			const year = new Date().getFullYear();
			const period = create_period(year, 1, 1);
			expect(get_period_text(period)).toBe(`January`);
		});
	});

	describe('When period does not starts on the first of the month', () => {
		test('Returns months and days of first and last day', () => {
			const period = create_period(2023, 1, 15);
			expect(get_period_text(period)).toBe('Jan 15 - Feb 14, 2023');
		});

		test('Omits year if period is current year', () => {
			const year = new Date().getFullYear();
			const period = create_period(year, 1, 15);
			expect(get_period_text(period)).toBe('Jan 15 - Feb 14');
		});
	});
});
