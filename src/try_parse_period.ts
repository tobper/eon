import { create_period, type Period } from './create_period.js';
import { try_parse_date_only } from './try_parse_date_only.js';
import { try_parse_interval } from './try_parse_interval.js';

export function try_parse_period(text: string): Period | null {
	if (text.length !== 13)
		return null;

	const period_parts = text.split(':');
	if (period_parts.length !== 2)
		return null;

	const start_date = try_parse_date_only(period_parts[0]);
	if (!start_date)
		return null;

	const interval = try_parse_interval(period_parts[1]);
	if (!interval)
		return null;

	return create_period(start_date, interval);
}
