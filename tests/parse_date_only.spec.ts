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
			key: '2023-02-05',
		});
	});

	test('returns DateOnly when argument begins with a date', () => {
		expect(parse_date_only('2023-02-05T12:13:14.234Z')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});
});
