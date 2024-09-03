import type { CalendarMonthArgs } from '../create_calendar_month.js';

export function extract_calendar_args(...args: CalendarMonthArgs) {
	const [year, month] = args.length === 1
		? [args[0].year, args[0].month]
		: args;

	const date = new Date(year, month - 1, 1);
	const invalid_date =
		date.getFullYear() !== year ||
		date.getMonth() !== month - 1;

	if (invalid_date)
		throw new Error(`'${year}-${month}' is not a valid calendar month`);

	return { year, month };
}
