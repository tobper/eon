import type { Period } from './create_period';
import { try_parse_period } from './try_parse_period';

export function parse_period(text: string): Period {
	const period = try_parse_period(text);
	if (!period)
		throw new Error(`'${text}' is not a valid period`);

	return period;
}
