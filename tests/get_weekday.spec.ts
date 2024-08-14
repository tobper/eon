import { get_weekday } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('get_weekday()', () => {
	test('week starts on monday', () => {
		expect(get_weekday({ year: 2020, month: 1, day: 6 })).toBe(1);
	});

	test('week end on sunday', () => {
		expect(get_weekday({ year: 2020, month: 1, day: 5 })).toBe(7);
	});
});
