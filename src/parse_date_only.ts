import { try_parse_date_only } from './try_parse_date_only.js';
import type { DateOnly } from './types.js';

export function parse_date_only(text: string): DateOnly {
	const date = try_parse_date_only(text);
	if (!date)
		throw new Error(`'${text}' is not a valid date`);

	return date;
}
