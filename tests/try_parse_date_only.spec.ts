
import { try_parse_date_only } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

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
