import type { Interval } from './types.js';

export function is_same_interval(
	interval_1: Interval,
	interval_2: Interval
): boolean {
	return (
		interval_1.amount === interval_2.amount &&
		interval_1.unit === interval_2.unit
	);
}
