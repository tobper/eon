import { create_calendar_month } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_calendar_month()', () => {
	test('returns a new calendar month', () => {
		expect(create_calendar_month({ year: 2023, month: 2 })).toMatchObject({
			year: 2023,
			month: 2,
		});
	});

	test('returned date can be compared using less and larger than', () => {
		expect(create_calendar_month(2023, 1) < create_calendar_month(2023, 2)).toBeTruthy();
		expect(create_calendar_month(2023, 2) > create_calendar_month(2023, 1)).toBeTruthy();
	});
});
