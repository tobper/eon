import type { Period } from './create_period.js';
import { to_date } from './to_date.js';

const locale = 'en';
const text_long_format_options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
const text_short_format_options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
const text_short_with_year_format_options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

export function get_period_text(
	period: Period
) {
	if (period.first_day.day === 1) {
		// November 2023
		return to_date(period.first_day).toLocaleDateString(locale, text_long_format_options);
	}

	// Nov 25 - Dec 24 2023
	const from = to_date(period.first_day).toLocaleDateString(locale, text_short_format_options);
	const to = to_date(period.last_day).toLocaleDateString(locale, text_short_with_year_format_options);

	return `${from} - ${to}`;
}
