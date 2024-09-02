import type { DateOnlyLike } from './create_date_only';

export function to_date(date: DateOnlyLike) {
	return new Date(date.year, date.month - 1, date.day);
}
