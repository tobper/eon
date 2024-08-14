import { add_days } from './add_days';
import { add_months } from './add_months';
import { add_weeks } from './add_weeks';
import { add_years } from './add_years';
import type { DateOnly, DateOnlyLike } from './date_only';
import { parse_interval, type IntervalLike } from './interval';

export function add_interval(
	original_date: DateOnlyLike,
	interval: IntervalLike | string
): DateOnly {
	if (typeof interval === 'string')
		interval = parse_interval(interval);

	const { amount, unit } = interval;

	switch (unit) {
		case 'y': return add_years(original_date, amount);
		case 'm': return add_months(original_date, amount);
		case 'w': return add_weeks(original_date, amount);
		case 'd': return add_days(original_date, amount);
		default: throw new Error('Invalid interval');
	}
}
