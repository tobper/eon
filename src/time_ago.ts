import { add_days } from './add_days.js';
import { add_weeks } from './add_weeks.js';
import { compare_dates } from './compare_dates.js';
import { create_date_only_from_date } from './create_date_only_from_date.js';
import { eon } from './eon.js';
import { get_day_text } from './get_day_text.js';
import { get_days_between } from './get_days_between.js';
import { get_month_text } from './get_month_text.js';
import { get_weekday } from './get_weekday.js';
import { is_same_date } from './is_same_date.js';
import { is_same_month } from './is_same_month.js';

const one_minute = 60;
const two_minutes = 120;
const ten_minutes = 600;
const one_hour = 3600;
const two_hours = 7200;
const four_hours = 14400;

export function time_ago(date: Date | string, reference?: Date | string) {
	if (typeof date === 'string')
		date = new Date(date);

	if (!reference)
		reference = new Date();
	else if (typeof reference === 'string')
		reference = new Date(reference);

	const diff = Math.floor((reference.getTime() - date.getTime()) / 1000);
	if (diff < one_minute)
		return 'just now';

	if (diff < two_minutes)
		return 'a minute ago';

	if (diff < ten_minutes)
		return 'a few minutes ago';

	if (diff < one_hour)
		return `${Math.floor(diff / 60)} minutes ago`;

	if (diff < two_hours)
		return 'an hour ago';

	if (diff < four_hours)
		return `${Math.floor(diff / 3600)} hours ago`;

	const d = create_date_only_from_date(date);
	const r = create_date_only_from_date(reference);

	if (is_same_date(d, r)) {
		const day_part = get_day_part(date);
		return day_part === 'morning'
			? 'this morning'
			: 'earlier today';
	}

	if (is_same_date(add_days(r, -1), d)) {
		const day_part = get_day_part(date);

		return day_part
			? `yesterday ${day_part}`
			: 'yesterday';
	}

	if (compare_dates(add_days(r, -6), d) < 1) {
		const days = get_days_between(r, d);
		return `${days} days ago`;
		// const day_part = get_day_part(date);
		// const week_day = eon.week_days_long[get_weekday(d) - 1];

		// return day_part
		// 	? `${week_day} ${day_part}`
		// 	: week_day;
	}

	const day_text = get_day_text(d.day);
	const prefix = compare_dates(add_weeks(r, -2), d) < 1 ? eon.week_days_long[get_weekday(d) - 1] : 'on';

	if (is_same_month(d, r))
		return `${prefix} the ${day_text}`;

	const month_text = get_month_text(d.month, 'long');

	if (d.year === r.year)
		return `${prefix} the ${day_text} of ${month_text}`;

	return `${prefix} the ${day_text} of ${month_text} ${d.year}`;
}

function get_day_part(date: Date) {
	const hours = date.getHours();
	if (hours >= 18)
		return 'evening';

	if (hours < 10)
		return 'morning';

	return '';
}
