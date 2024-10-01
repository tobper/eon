import { create_period } from '@tobper/eon';
import { describe, expect, test } from 'vitest';
import { get_calendar_month_text } from '../src/get_calendar_month_text';

describe('get_calendar_month_text()', () => {
	test('returns calendar month as text', () => {
		expect(get_calendar_month_text({ year: 2023, month: 1 })).toEqual('January 2023');
		expect(get_calendar_month_text({ year: 2023, month: 2 })).toEqual('February 2023');
	});

	test('returns period as text', () => {
		expect(get_calendar_month_text(create_period(2023, 1))).toEqual('January 2023');
		expect(get_calendar_month_text(create_period(2023, 1, 25))).toEqual('January - February 2023');
		expect(get_calendar_month_text(create_period(2022, 12, 25))).toEqual('December 2022 - January 2023');
	});
});
