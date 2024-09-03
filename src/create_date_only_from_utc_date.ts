import { create_date_only, type DateOnly } from './create_date_only.js';

export function create_date_only_from_utc_date(date: Date): DateOnly;
export function create_date_only_from_utc_date(date: Date | null): DateOnly | null;
export function create_date_only_from_utc_date(date: Date | undefined): DateOnly | undefined;
export function create_date_only_from_utc_date(date: Date | null | undefined): DateOnly | null | undefined {
	if (date == null)
		return date;

	return create_date_only({
		year: date.getUTCFullYear(),
		month: date.getUTCMonth() + 1,
		day: date.getUTCDate()
	});
}
