import type { Period } from './create_period.js';
import { eon } from './eon.js';
import { to_date } from './to_date.js';

export function get_period_text(
	period: Period
) {
	const current_year = new Date().getFullYear();
	const include_from_year = period.first_day.year !== period.last_day.year;
	const include_to_year = period.last_day.year !== current_year || include_from_year;

	if (period.first_day.day === 1 && period.length.amount === 1 && period.length.unit === 'm') {
		// November 2023
		return to_date(period.first_day)
			.toLocaleDateString(eon.locale, {
				year: include_to_year ? 'numeric' : undefined,
				month: 'long'
			});
	}

	// Nov 25 - Dec 24 2023
	const from = to_date(period.first_day)
		.toLocaleDateString(eon.locale, {
			year: include_from_year ? 'numeric' : undefined,
			month: 'short',
			day: 'numeric'
		});


	const to = to_date(period.last_day)
		.toLocaleDateString(eon.locale, {
			year: include_to_year ? 'numeric' : undefined,
			month: 'short',
			day: 'numeric'
		});

	return `${from} - ${to}`;
}
