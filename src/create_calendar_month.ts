
export interface CalendarMonth {
	readonly year: number;
	readonly month: number;
}

export function create_calendar_month(
	date: CalendarMonth
): CalendarMonth;

export function create_calendar_month(
	year: number,
	month: number
): CalendarMonth;

export function create_calendar_month(
	...args:
		| [date: CalendarMonth]
		| [year: number, month: number]
): CalendarMonth {
	const [year, month] = args.length === 1
		? [args[0].year, args[0].month]
		: args;

	return Object.freeze({ year, month });
}
