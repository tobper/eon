import type { Period } from './create_period.js';
import { get_date_today } from './get_date_today.js';
import { period_contains_date } from './period_contains_date.js';

export function is_current_period(period: Period): boolean {
	return period_contains_date(period, get_date_today());
}
