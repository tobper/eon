import { create_period, type Period } from './create_period.js';
import { try_parse_date_only } from './try_parse_date_only.js';

export function try_parse_period(text: string): Period | null {
	const start_date = try_parse_date_only(text);
	if (!start_date)
		return null;

	return create_period(start_date);
}
