import { add_interval } from './add_interval.js';
import type { Period } from './create_period.js';

export function get_previous_period(period: Period): Period {
	const { amount, unit } = period.length;

	return add_interval(period, { amount: amount * -1, unit });
}
