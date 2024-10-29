import { describe, expect, test } from 'vitest';
import { create_calendar_month } from '../src/create_calendar_month';
import { create_period } from '../src/create_period';
import { get_date_only_text } from '../src/get_date_only_text';
import { parse_date_only } from '../src/parse_date_only';

describe('get_date_only_text()', () => {
	test.each([
		['2023-01-01', 'Jan 1st, 2023'],
		['2023-02-02', 'Feb 2nd, 2023'],
		['2023-03-03', 'Mar 3rd, 2023'],
		['2023-04-04', 'Apr 4th, 2023'],
		['2023-05-05', 'May 5th, 2023'],
		['2023-06-10', 'Jun 10th, 2023'],
		['2023-07-20', 'Jul 20th, 2023'],
		['2023-08-21', 'Aug 21st, 2023'],
		['2023-09-22', 'Sep 22nd, 2023'],
		['2023-10-23', 'Oct 23rd, 2023'],
		['2023-11-30', 'Nov 30th, 2023'],
		['2023-12-31', 'Dec 31st, 2023'],
	])(`returns '%s' as '%s'`, (date, text) => {
		expect(get_date_only_text(parse_date_only(date))).toEqual(text);
	});

	test('returns day only when day is within reference period', () => {
		const period = create_period(2023, 1, 1);

		expect(get_date_only_text({ year: 2023, month: 1, day: 1 }, period)).toEqual('1st');
		expect(get_date_only_text({ year: 2023, month: 1, day: 31 }, period)).toEqual('31st');
	});

	test('returns day and month when day is within the same year as reference period', () => {
		const single_year_period = create_period(2023, 1, 1);
		const split_year_period = create_period(2022, 12, 15);

		expect(get_date_only_text({ year: 2023, month: 10, day: 1 }, single_year_period)).toEqual('Oct 1st');
		expect(get_date_only_text({ year: 2022, month: 1, day: 1 }, split_year_period)).toEqual('Jan 1st');
		expect(get_date_only_text({ year: 2023, month: 12, day: 31 }, split_year_period)).toEqual('Dec 31st');
	});

	test('returns full text when day is not within the same year as reference period', () => {
		const period = create_period(2023, 1, 1);

		expect(get_date_only_text({ year: 2022, month: 12, day: 31 }, period)).toEqual('Dec 31st, 2022');
		expect(get_date_only_text({ year: 2024, month: 1, day: 1 }, period)).toEqual('Jan 1st, 2024');
	});

	test('returns day only when day is within reference month', () => {
		const month = create_calendar_month(2023, 2);

		expect(get_date_only_text({ year: 2023, month: 2, day: 1 }, month)).toEqual('1st');
		expect(get_date_only_text({ year: 2023, month: 2, day: 31 }, month)).toEqual('31st');
	});

	test('returns day and month when day is within the same year as reference period', () => {
		const month = create_calendar_month(2023, 2);

		expect(get_date_only_text({ year: 2023, month: 1, day: 1 }, month)).toEqual('Jan 1st');
		expect(get_date_only_text({ year: 2023, month: 12, day: 31 }, month)).toEqual('Dec 31st');
	});

	test('returns full text when day is not within the same year as reference period', () => {
		const month = create_calendar_month(2023, 2);

		expect(get_date_only_text({ year: 2022, month: 12, day: 31 }, month)).toEqual('Dec 31st, 2022');
		expect(get_date_only_text({ year: 2024, month: 1, day: 1 }, month)).toEqual('Jan 1st, 2024');
	});
});
