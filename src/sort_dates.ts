import { compare_dates } from './compare_dates.js';
import type { DateOnly } from './create_date_only.js';

export function sort_dates(dates: DateOnly[]) {
	return dates.toSorted(compare_dates);
}
