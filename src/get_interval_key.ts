import type { Interval } from './create_interval.js';

export function get_interval_key(interval: Interval) {
	const { amount, unit } = interval;

	return `${amount}${unit}`;
}
