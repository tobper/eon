import { describe, expect, test } from 'vitest';
import { create_period } from '../src/create_period';
import { get_period_text } from '../src/get_period_text';

describe('get_period_text()', () => {
	describe('When period is a month starting on the first', () => {
		test('Returns single month and year', () => {
			const period = create_period(2023, 1, 1);
			expect(get_period_text(period)).toBe('January 2023');
		});

		test('Omits year if period is in current year', () => {
			const year = new Date().getFullYear();
			const period = create_period(year, 1, 1);
			expect(get_period_text(period)).toBe(`January`);
		});
	});

	describe('When period does not starts on the first of the month', () => {
		const current_year = new Date().getFullYear();

		test.each([
			{
				period: create_period(2023, 1, 15),
				expected: 'Jan 15 - Feb 14, 2023'
			},
			{
				period: create_period(2023, 1, 15, '5d'),
				expected: 'Jan 15 - Jan 19, 2023'
			},
			{
				period: create_period(2023, 1, 15, '1w'),
				expected: 'Jan 15 - Jan 21, 2023'
			},
			{
				period: create_period(2023, 12, 15),
				expected: 'Dec 15, 2023 - Jan 14, 2024'
			},
			{
				period: create_period(2023, 1, 15, '1y'),
				expected: 'Jan 15, 2023 - Jan 14, 2024'
			}
		])('Returns months and days of first and last day', ({ period, expected }) => {
			expect(get_period_text(period)).toBe(expected);
		});

		test('Omits year if period is current year', () => {
			expect(get_period_text(create_period(current_year, 1, 15))).toBe('Jan 15 - Feb 14');
		});
	});
});
