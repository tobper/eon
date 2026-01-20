import { add_days } from './add_days.js';
import { add_months } from './add_months.js';
import { get_days_between } from './get_days_between.js';
import { get_weekday } from './get_weekday.js';
import { period_contains_date } from './period_contains_date.js';
import type { CalendarDate, Period } from './types.js';

export function get_calendar_dates(period: Period): CalendarDate[] {
	const { first_day, last_day } = period;
	const previous_month_days_visible = get_weekday(first_day) - 1;
	const next_month_days_visible = 7 - get_weekday(last_day);
	const active_month_days = get_days_between(first_day, add_months(first_day, 1));
	const start_date = add_days(first_day, -previous_month_days_visible);
	const weekend_days = [6, 7];

	return Array
		.from({ length: previous_month_days_visible + active_month_days + next_month_days_visible })
		.map((_, daysFromStart) => {
			const date = add_days(start_date, daysFromStart);
			const same_month = period_contains_date(period, date);
			const weekend = weekend_days.includes(get_weekday(date));

			return { same_month, weekend, ...date };
		});
}
