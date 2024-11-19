import type { Period } from './create_period.js';
import { to_date } from './to_date.js';

const locale = 'en';

export function get_period_text(
	period: Period
) {
	const current_year = new Date().getFullYear();
	const include_year =
		period.first_day.year !== current_year ||
		period.last_day.year !== current_year;

	if (period.first_day.day === 1) {
		// November 2023
		return to_date(period.first_day)
			.toLocaleDateString(locale, {
				year: include_year ? 'numeric' : undefined,
				month: 'long'
			});
	}

	// Nov 25 - Dec 24 2023
	const from = to_date(period.first_day)
		.toLocaleDateString(locale, {
			month: 'short',
			day: 'numeric'
		});

	const to = to_date(period.last_day)
		.toLocaleDateString(locale, {
			year: include_year ? 'numeric' : undefined,
			month: 'short',
			day: 'numeric'
		});

	return `${from} - ${to}`;
}
