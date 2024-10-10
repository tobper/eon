import { create_calendar_month } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_calendar_month()', () => {
	test('returns a new calendar month', () => {
		expect(create_calendar_month({ year: 2023, month: 2 })).toMatchObject({
			year: 2023,
			month: 2,
		});
	});
});
