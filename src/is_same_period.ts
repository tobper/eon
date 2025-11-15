import type { Period } from './create_period.js';
import { is_same_date } from './is_same_date.js';
import { is_same_interval } from './is_same_interval.js';

export function is_same_period(
	period_1: Period,
	period_2: Period
): boolean {
	return (
		is_same_date(period_1.first_day, period_2.first_day) &&
		is_same_interval(period_1.length, period_2.length)
	);
}
