import type { Interval } from './create_interval';
import { try_parse_interval } from './try_parse_interval';

export function parse_interval(text: string): Interval {
	const interval = try_parse_interval(text);
	if (!interval)
		throw new Error(`'${text}' is not a valid interval`);

	return interval;
}
