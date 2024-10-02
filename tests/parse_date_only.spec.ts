import { parse_date_only } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

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

	test('treats non padded day and month as valid', () => {
		expect(parse_date_only('2023-1-15')).toMatchObject({
			year: 2023,
			month: 1,
			day: 15,
		});

		expect(parse_date_only('2023-2-5')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});

	test('returns DateOnly when argument begins with a date', () => {
		expect(parse_date_only('2023-02-05T12:13:14.234Z')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});

		expect(parse_date_only('2023-2-5 lorem ipsum')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});
});
