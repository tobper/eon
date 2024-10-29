import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';
import { is_same_month } from './is_same_month.js';
import { months_short } from './months_short.js';
import { period_contains_date } from './period_contains_date.js';

const locale = 'en';
const plural = new Intl.PluralRules(locale, { type: 'ordinal' });
const suffixes = new Map([
	['one', 'st'],
	['two', 'nd'],
	['few', 'rd'],
	['other', 'th'],
]);

export function get_date_only_text(date: DateOnly, reference?: CalendarMonth | Period) {
	const { year, month, day } = date;
	const day_text = `${day}${suffixes.get(plural.select(day))}`;

	if (reference) {
		if ('first_day' in reference) {
			if (period_contains_date(reference, date))
				return day_text;

			if (year === reference.first_day.year || year === reference.last_day.year)
				return `${months_short[month - 1]} ${day_text}`;
		}
		else {
			if (is_same_month(date, reference))
				return day_text;

			if (year === reference.year)
				return `${months_short[month - 1]} ${day_text}`;
		}
	}

	return `${months_short[month - 1]} ${day_text}, ${year}`;
}
