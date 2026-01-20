import { add_days } from './add_days.js';
import { add_months } from './add_months.js';
import { get_first_day_of_month } from './get_first_day_of_month.js';
import type { CalendarMonth } from './types.js';

export function get_last_day_of_month(calendar_month: CalendarMonth) {
	const first_day_of_month = get_first_day_of_month(calendar_month);
	const first_day_of_next_month = add_months(first_day_of_month, 1);
	const last_day_of_month = add_days(first_day_of_next_month, -1);

	return last_day_of_month;
}
