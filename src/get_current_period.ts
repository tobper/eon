import { get_date_today } from './get_date_today.js';
import { get_period_for_date } from './get_period_for_date.js';

export function get_current_period(start_day: number) {
	const today = get_date_today();

	return get_period_for_date(today, start_day);
}
