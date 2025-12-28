import type { CalendarMonth } from './create_calendar_month.js';
import type { DateOnly } from './create_date_only.js';
import type { Period } from './create_period.js';
import { get_day_text } from './get_day_text.js';
import { get_month_text } from './get_month_text.js';
import { is_same_month } from './is_same_month.js';
import { period_contains_date } from './period_contains_date.js';

export function get_date_only_text(date: DateOnly, reference?: CalendarMonth | Period) {
	const { year } = date;
	const day_text = get_day_text(date);
	const month_text = get_month_text(date);

	if (reference) {
		if ('first_day' in reference) {
			if (period_contains_date(reference, date))
				return day_text;

			if (year === reference.first_day.year || year === reference.last_day.year)
				return `${month_text} ${day_text}`;
		}
		else {
			if (is_same_month(date, reference))
				return day_text;

			if (year === reference.year)
				return `${month_text} ${day_text}`;
		}
	}

	return `${month_text} ${day_text}, ${year}`;
}
