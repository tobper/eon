import type { DateOnlyLike } from './create_date_only.js';
import type { PeriodLike } from './create_period.js';

export function period_contains_date(period: PeriodLike, date: DateOnlyLike): boolean {
	return (
		date >= period.first_day &&
		date <= period.last_day
	);
}
