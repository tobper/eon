import type { DateOnly } from './create_date_only.js';

export function is_same_date(
	date_1: DateOnly
): (date_2: DateOnly) => boolean;

export function is_same_date(
	date_1: DateOnly,
	date_2: DateOnly
): boolean;

export function is_same_date(
	...args:
		| [date_1: DateOnly]
		| [date_1: DateOnly, date_2: DateOnly]
) {
	if (args.length === 1)
		return (date_2: DateOnly) => is_same_date(args[0], date_2);

	const [date_1, date_2] = args;

	return (
		date_1.day === date_2.day &&
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
