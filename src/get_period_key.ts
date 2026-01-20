import { get_date_only_key } from './get_date_only_key.js';
import { get_interval_key } from './get_interval_key.js';
import type { Period } from './types.js';

export function get_period_key(
	period: Period
) {
	const date_key = get_date_only_key(period.first_day);
	const interval_key = get_interval_key(period.length);

	return `${date_key}-${interval_key}`;
}
