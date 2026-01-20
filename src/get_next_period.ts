import { add_interval } from './add_interval.js';
import type { Period } from './types.js';

export function get_next_period(period: Period): Period {
	return add_interval(period, period.length);
}
