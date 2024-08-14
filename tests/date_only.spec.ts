import {
	create_date_only,
	create_date_only_from_date,
	create_date_only_from_utc_date,
	create_date_only_from_value,
	parse_date_only,
	try_parse_date_only
} from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_date_only', () => {
	test('returns a new date', () => {
		expect(create_date_only({ year: 2023, month: 2, day: 5 })).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});

	test('returned date can be compared using less and larger than', () => {
		expect(create_date_only_from_value(20230205) < create_date_only_from_value(20230206)).toBeTruthy();
		expect(create_date_only_from_value(20230205) > create_date_only_from_value(20230204)).toBeTruthy();
	});
});

describe('create_date_only_from_date()', () => {
	test('returns DateOnly based on date', () => {
		expect(create_date_only_from_date(new Date(2023, 1, 5))).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});
});

describe('create_date_only_from_utc_date()', () => {
	test.each([
		[new Date(Date.UTC(2023, 1, 5, 0, 0, 0))],
		[new Date(Date.UTC(2023, 1, 5, 23, 59, 0))],
	])('returns DateOnly based on utc date', (utcDate) => {
		expect(create_date_only_from_utc_date(utcDate)).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});

	test('returns null when provided with null', () => {
		expect(create_date_only_from_utc_date(null)).toBeNull();
	});
});

describe('create_date_only_from_value()', () => {
	test('returns DateOnly based on a number', () => {
		expect(create_date_only_from_value(20230205)).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});
});

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

describe('try_parse_date_only()', () => {
	test('returns null when argument is empty', () => {
		expect(try_parse_date_only('')).toBeNull();
	});

	test('returns null when argument is invalid', () => {
		expect(try_parse_date_only('foo')).toBeNull();
	});

	test('returns DateOnly when argument is valid', () => {
		expect(try_parse_date_only('2023-02-05')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});

	test('returns DateOnly when argument begins with a date', () => {
		expect(try_parse_date_only('2023-02-05T12:13:14.234Z')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});
});
