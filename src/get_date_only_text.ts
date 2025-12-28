import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';
import { eon } from './eon.js';
import { is_same_month } from './is_same_month.js';
import { period_contains_date } from './period_contains_date.js';

const plural = new Intl.PluralRules(eon.locale, { type: 'ordinal' });

export function get_date_only_text(date: DateOnly, reference?: CalendarMonth | Period) {
	const { year, month, day } = date;
	const day_text = `${day}${eon.day_suffixes.get(plural.select(day))}`;

	if (reference) {
		if ('first_day' in reference) {
			if (period_contains_date(reference, date))
				return day_text;

			if (year === reference.first_day.year || year === reference.last_day.year)
				return `${eon.months_short[month - 1]} ${day_text}`;
		}
		else {
			if (is_same_month(date, reference))
				return day_text;

			if (year === reference.year)
				return `${eon.months_short[month - 1]} ${day_text}`;
		}
	}

	return `${eon.months_short[month - 1]} ${day_text}, ${year}`;
}
