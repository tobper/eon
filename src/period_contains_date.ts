import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';

export function period_contains_date(period: Period, date: DateOnly): boolean {
	return (
		date >= period.first_day &&
		date <= period.last_day
	);
}
