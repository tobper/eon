import { add_days } from './add_days';
import { add_months } from './add_months';
import { create_date_only } from './date_only';
import { get_days_between } from './get_days_between';
import { get_weekday } from './get_weekday';
import { is_same_calendar_month } from './is_same_calendar_month';

const locale = 'en';

const text_format_options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
};

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
	const { year, month } = extract_args(...args);
	const key = `${year}-${pad_number(month)}`;

	return Object.freeze({
		year,
		month,
		key,
		valueOf() { return key; },
	});
}

export function create_calendar_month_from_date(
	date: Date
): CalendarMonth {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	return create_calendar_month(year, month);
}

export function get_next_calendar_month(
	...args: CalendarMonthArgs
): CalendarMonth {
	const { year, month } = extract_args(...args);

	return month === 12
		? create_calendar_month(year + 1, 1)
		: create_calendar_month(year, month + 1);
}

export function get_previous_calendar_month(
	...args: CalendarMonthArgs
): CalendarMonth {
	const { year, month } = extract_args(...args);

	return month === 1
		? create_calendar_month(year - 1, 12)
		: create_calendar_month(year, month - 1);
}

export function get_calendar_dates(
	...args: CalendarMonthArgs
) {
	const { year, month } = extract_args(...args);
	const first_of_month = get_first_day_of_month(year, month);
	const last_of_month = get_last_day_of_month(year, month);
	const previous_month_days_visible = get_weekday(first_of_month) - 1;
	const next_month_days_visible = 7 - get_weekday(last_of_month);
	const active_month_days = get_days_between(first_of_month, add_months(first_of_month, 1));
	const start_date = add_days(first_of_month, -previous_month_days_visible);
	const weekend_days = [6, 7];

	return Array
		.from({ length: previous_month_days_visible + active_month_days + next_month_days_visible })
		.map((_, daysFromStart) => {
			const date = add_days(start_date, daysFromStart);
			const same_month = is_same_calendar_month(date, { year, month });
			const weekend = weekend_days.includes(get_weekday(date));

			return { same_month, weekend, ...date };
		});
}

export function get_first_day_of_month(
	...args: CalendarMonthArgs
) {
	const { year, month } = extract_args(...args);

	return create_date_only({ year, month, day: 1 });
}

export function get_last_day_of_month(
	...args: CalendarMonthArgs
) {
	const { year, month } = extract_args(...args);
	const first_day_of_month = get_first_day_of_month(year, month);
	const first_day_of_next_month = add_months(first_day_of_month, 1);
	const last_day_of_month = add_days(first_day_of_next_month, -1);

	return last_day_of_month;
}

export function get_calendar_month_text(
	...args: CalendarMonthArgs
) {
	const { year, month } = extract_args(...args);

	return new Date(year, month - 1, 1).toLocaleDateString(locale, text_format_options);
}

function extract_args(
	...args: CalendarMonthArgs
) {
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

function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}
