import { try_parse_period } from './try_parse_period.js';
import type { Period } from './types.js';

export function parse_period(text: string): Period {
	const period = try_parse_period(text);
	if (!period)
		throw new Error(`'${text}' is not a valid period`);

	return period;
}
