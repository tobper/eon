import { add_months } from './add_months.js';
import { create_period } from './create_period.js';
import type { DateOnly } from './types.js';

export function get_period_for_date(date: DateOnly, period_start_day = 1) {
	if (date.day < period_start_day)
		date = add_months(date, -1);

	return create_period({ ...date, day: period_start_day });
}
