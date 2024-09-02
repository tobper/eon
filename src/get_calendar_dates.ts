import { add_days } from './add_days.js';
import { add_months } from './add_months.js';
import type { CalendarMonthArgs } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import { get_days_between } from './get_days_between.js';
import { get_first_day_of_month } from './get_first_day_of_month.js';
import { get_last_day_of_month } from './get_last_day_of_month.js';
import { get_weekday } from './get_weekday.js';
import { extract_calendar_args } from './internal/extract_calendar_args.js';
import { is_same_calendar_month } from './is_same_calendar_month.js';

export interface CalendarDate extends DateOnly {
	same_month: boolean;
	weekend: boolean;
}

export function get_calendar_dates(...args: CalendarMonthArgs): CalendarDate[] {
	const { year, month } = extract_calendar_args(...args);
	const first_of_month = get_first_day_of_month(year, month);
	const last_of_month = get_last_day_of_month(year, month);
	const previous_month_days_visible = get_weekday(first_of_month) - 1;
	const next_month_days_visible = 7 - get_weekday(last_of_month);
	const active_month_days = get_days_between(first_of_month, add_months(first_of_month, 1));
	const start_date = add_days(first_of_month, -previous_month_days_visible);
	const weekend_days = [6, 7];

	return Array
		.from({ length: previous_month_days_visible + active_month_days + next_month_days_visible })
		.map((_, daysFromStart) => {
			const date = add_days(start_date, daysFromStart);
			const same_month = is_same_calendar_month(date, { year, month });
			const weekend = weekend_days.includes(get_weekday(date));

			return { same_month, weekend, ...date };
		});
}
