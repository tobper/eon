import type { DateOnly } from './create_date_only';

export function sort_dates(dates: DateOnly[]) {
	return dates.toSorted((x, y) => {
		if (x.year < y.year)
			return -1;

		if (x.year > y.year)
			return 1;

		if (x.month < y.month)
			return -1;

		if (x.month > y.month)
			return 1;

		if (x.day < y.day)
			return -1;

		if (x.day > y.day)
			return 1;

		return 0;
	});
}
