import { describe, expect, test } from 'vitest';
import { create_calendar_month } from '../src/create_calendar_month.js';

describe('create_calendar_month()', () => {
	test('returns a new calendar month', () => {
		expect(create_calendar_month({ year: 2023, month: 2 })).toMatchObject({
			year: 2023,
			month: 2,
		});
	});
});
