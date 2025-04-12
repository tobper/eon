import { create_period, type Period } from './create_period.js';
import { try_parse_date_only } from './try_parse_date_only.js';
import { try_parse_interval } from './try_parse_interval.js';

export function try_parse_period(text: string): Period | null {
	if (text.length < 13)
		return null;

	const separator_index = text.lastIndexOf('-');
	if (separator_index === -1)
		return null;

	const date_part = text.substring(0, separator_index);
	const interval_part = text.substring(separator_index + 1);

	const start_date = try_parse_date_only(date_part);
	if (!start_date)
		return null;

	const interval = try_parse_interval(interval_part);
	if (!interval)
		return null;

	return create_period(start_date, interval);
}
