import { extract_calendar_args } from './internal';

export interface CalendarMonth {
	year: number;
	month: number;
	key: string;
}

export interface CalendarMonthLike {
	year: number;
	month: number;
}

export type CalendarMonthArgs =
	| [date: CalendarMonthLike]
	| [year: number, month: number];

export function create_calendar_month(
	...args: CalendarMonthArgs
): CalendarMonth {
	const { year, month } = extract_calendar_args(...args);
	const key = `${year}-${pad_number(month)}`;

	return Object.freeze({
		year,
		month,
		key,
		valueOf() { return key; },
	});
}

function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}
