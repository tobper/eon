import type { Interval } from './create_interval.js';
import { try_parse_interval } from './try_parse_interval.js';

export function parse_interval(text: string): Interval {
	const interval = try_parse_interval(text);
	if (!interval)
		throw new Error(`'${text}' is not a valid interval`);

	return interval;
}
