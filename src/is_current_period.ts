import type { Period } from './create_period';
import { get_date_today } from './get_date_today';
import { period_contains_date } from './period_contains_date';

export function is_current_period(period: Period): boolean {
	return period_contains_date(period, get_date_today());
}
