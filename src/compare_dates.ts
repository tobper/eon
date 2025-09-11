import type { DateOnly } from './create_date_only.js';

export function compare_dates(
	date_1: DateOnly
): (date_2: DateOnly) => number;

export function compare_dates(
	date_1: DateOnly,
	date_2: DateOnly
): number;

export function compare_dates(
	...args:
		| [date_1: DateOnly]
		| [date_1: DateOnly, date_2: DateOnly]
) {
	if (args.length === 1)
		return (date_2: DateOnly) => compare_dates(args[0], date_2);

	const [date_1, date_2] = args;

	if (date_1.year < date_2.year)
		return -1;

	if (date_1.year > date_2.year)
		return 1;

	if (date_1.month < date_2.month)
		return -1;

	if (date_1.month > date_2.month)
		return 1;

	if (date_1.day < date_2.day)
		return -1;

	if (date_1.day > date_2.day)
		return 1;

	return 0;
}
