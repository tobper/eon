import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';
import { get_date_only_value } from './get_date_only_value.js';

export function period_contains_date(period: Period, date: DateOnly): boolean {
	const first_day_value = get_date_only_value(period.first_day);
	const last_day_value = get_date_only_value(period.last_day);
	const date_value = get_date_only_value(date);

	return (
		date_value >= first_day_value &&
		date_value <= last_day_value
	);
}
