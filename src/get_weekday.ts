import type { DateOnlyLike } from './date_only';

export function get_weekday(
	{ year, month, day }: DateOnlyLike
) {
	// UTC day starts with index 0 on sunday
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
	const utc_day = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

	// Convert to week starting on monday as 1
	// https://en.wikipedia.org/wiki/ISO_8601
	const iso_day = (utc_day + 6) % 7 + 1;

	return iso_day;
}
