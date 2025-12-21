import { describe, expect, test } from 'vitest';
import { try_parse_date_only } from '../src/try_parse_date_only';

describe('try_parse_date_only()', () => {
	test('returns null when argument is empty', () => {
		expect(try_parse_date_only('')).toBeNull();
	});

	test('returns null when argument is invalid', () => {
		expect(try_parse_date_only('foo')).toBeNull();
		expect(try_parse_date_only('2024-1-1')).toBeNull();
	});

	test('returns DateOnly when argument is valid', () => {
		expect(try_parse_date_only('2023-02-05')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});

		expect(try_parse_date_only('2023.02.05')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});

	test('returns DateOnly when argument begins with a date', () => {
		expect(try_parse_date_only('2023-02-05T12:13:14.234Z')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});

		expect(try_parse_date_only('2023.02.05 [121314]')).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
		});
	});
});
