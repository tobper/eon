import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';
import { get_day_text } from './get_day_text.js';
import { get_month_text } from './get_month_text.js';
import { is_same_date } from './is_same_date.js';

export function get_period_text(
	period: Period,
	options: {
		day_suffix?: boolean
		month?: 'long' | 'short'
	} = {}
) {
	const current_year = new Date().getFullYear();
	const include_day_suffix = options.day_suffix ?? false;
	const include_from_year = period.first_day.year !== period.last_day.year;
	const include_to_year = period.last_day.year !== current_year || include_from_year;

	if (period.first_day.day === 1 && period.length.amount === 1 && period.length.unit === 'm') {
		// November 2023
		return convert(period.first_day, {
			year: include_to_year,
			month: 'long',
			day: false
		});
	}

	if (is_same_date(period.first_day, period.last_day)) {
		// November 3
		// November 3, 2023
		return convert(period.first_day, {
			year: include_to_year,
			month: options.month ?? 'long',
			day: true
		});
	}

	// Nov 25 - Dec 24 2023
	const from = convert(period.first_day, {
		year: include_from_year,
		month: options.month ?? 'short',
		day: true
	});

	const to = convert(period.last_day, {
		year: include_to_year,
		month: options.month ?? 'short',
		day: true
	});

	return `${from} - ${to}`;

	function convert(
		date: DateOnly,
		{ day, month, year }: {
			day: boolean,
			month: 'long' | 'short',
			year: boolean
		}
	) {
		let text = get_month_text(date, month);

		if (day)
			text += ` ${include_day_suffix ? get_day_text(date) : date.day}`;

		if (year)
			text += `, ${date.year}`;

		return text;
	}
}
