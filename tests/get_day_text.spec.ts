import { describe, expect, test } from 'vitest';
import { get_day_text } from '../src/get_day_text';

describe('get_day_text()', () => {
	test.each([
		{ day: 1, expected: '1st' },
		{ day: 2, expected: '2nd' },
		{ day: 3, expected: '3rd' },
		{ day: 4, expected: '4th' },
	])('returns correct plural suffix', ({ day, expected }) => {
		expect(get_day_text(day)).toBe(expected);
	});
});
