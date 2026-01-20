import { describe, expect, test } from 'vitest';
import { parse_date_only } from '../src/parse_date_only.js';

describe('parse_date_only()', () => {
	test('throws when argument is empty', () => {
		expect(() => parse_date_only('')).toThrow(`'' is not a valid date`);
	});

	test('throws when argument is invalid', () => {
		expect(() => parse_date_only('foo')).toThrow(`'foo' is not a valid date`);
	});

	test('returns DateOnly when argument is valid', () => {
		expect(parse_date_only('2023-02-05')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});

		expect(parse_date_only('2023-12-25')).toMatchObject({
			year: 2023,
			month: 12,
			day: 25,
		});
	});

	test('requires month to be specified with 2 digits', () => {
		expect(() => parse_date_only('2023-01-1')).toThrow(`'2023-01-1' is not a valid date`);
	});

	test('requires day to be specified with 2 digits', () => {
		expect(() => parse_date_only('2023-1-15')).toThrow(`'2023-1-15' is not a valid date`);
	});

	test('returns DateOnly when argument begins with a date', () => {
		expect(parse_date_only('2023-02-05T12:13:14.234Z')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});

		expect(parse_date_only('2023-02-05 lorem ipsum')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});
});
