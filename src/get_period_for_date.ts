import { add_months } from './add_months.js';
import type { DateOnlyLike } from './create_date_only.js';
import { create_period } from './create_period.js';

export function get_period_for_date(date: DateOnlyLike, period_start_day = 1) {
	if (date.day < period_start_day) {
		const previous_period = add_months(date, -1);

		return create_period({ ...previous_period, day: period_start_day });
	}

	return create_period({ ...date, day: period_start_day });
}
