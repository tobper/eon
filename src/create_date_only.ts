import { get_date_only_key } from './get_date_only_key';

export interface DateOnly {
	year: number;
	month: number;
	day: number;
}

export function create_date_only(
	date: DateOnly
): DateOnly;

export function create_date_only(
	year: number,
	month: number,
	day: number
): DateOnly;

export function create_date_only(
	...args:
		| [date: DateOnly]
		| [year: number, month: number, day: number]
): DateOnly {
	const [year, month, day] = args.length === 1
		? [args[0].year, args[0].month, args[0].day]
		: args;

	const date = new Date(year, month - 1, day);
	const invalid_date =
		date.getFullYear() !== year ||
		date.getMonth() !== month - 1 ||
		date.getDate() !== day;

	if (invalid_date)
		throw new Error(`'${get_date_only_key({ year, month, day })}' is not a valid date`);

	return Object.freeze({ year, month, day });
}
