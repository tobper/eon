import { add_days_to_date } from './add_days_to_date.js';
import { add_months_to_date } from './add_months_to_date.js';
import { add_years_to_date } from './add_years_to_date.js';
import { create_date_only } from './create_date_only.js';
import { create_interval } from './create_interval.js';
import { get_days_between } from './get_days_between.js';
import { parse_interval } from './parse_interval.js';
import type { DateOnly, Interval, Period } from './types.js';

export function create_period(
	first_day: {
		year: number;
		month: number;
		day?: number;
	},
	last_date: {
		year: number;
		month: number;
		day?: number;
	}
): Period;

export function create_period(
	first_day: {
		year: number;
		month: number;
		day?: number;
	},
	length?: Interval | string
): Period;

export function create_period(
	start_year: number,
	start_month: number,
	start_day?: number,
	length?: Interval | string
): Period;

export function create_period(
	...args: ObjectArgs | ObjectsArgs | NumberArgs
): Period {
	if (is_number_args(args)) {
		const [year, month, day, length] = args;
		return create_with_date_and_length({ year, month, day }, length);
	}

	if (is_date_and_length_args(args)) {
		const [first_day, length] = args;
		return create_with_date_and_length(first_day, length);
	}

	const [first_day, last_day] = args;
	return create_with_dates(first_day, last_day);
}

const default_interval = create_interval(1, 'm');

interface DateOnlySource { year: number; month: number; day?: number; }
type IntervalSource = Interval | string;
type ObjectArgs = [first_day: DateOnlySource, length?: IntervalSource];
type ObjectsArgs = [first_day: DateOnlySource, last_day: DateOnlySource, length?: IntervalSource];
type NumberArgs = [first_year: number, first_month: number, first_day?: number, length?: IntervalSource];

function is_number_args(args: ObjectArgs | ObjectsArgs | NumberArgs): args is NumberArgs {
	return typeof args[0] === 'number';
}

function is_date_and_length_args(args: ObjectArgs | ObjectsArgs): args is ObjectArgs {
	return (
		args[1] === undefined ||
		typeof args[1] === 'string' ||
		'amount' in args[1]
	);
}

function create_with_date_and_length(
	date: DateOnlySource,
	length_arg: Interval | string = default_interval
) {
	const length = typeof length_arg === 'string' ? parse_interval(length_arg) : length_arg;
	const first_day = create_date_only(date.year, date.month, date.day ?? 1);
	const last_day = add_days_to_date(add_interval(first_day, length), -1);

	return Object.freeze({ first_day, last_day, length });
}

function create_with_dates(
	first_day_source: DateOnlySource,
	last_day_source: DateOnlySource,
) {
	const first_day = create_date_only(first_day_source.year, first_day_source.month, first_day_source.day ?? 1);
	const last_day = create_date_only(last_day_source.year, last_day_source.month, last_day_source.day ?? 1);
	const days = get_days_between(last_day, first_day) + 1;
	const length = create_interval(days, 'd');

	return Object.freeze({ first_day, last_day, length });
}

function add_interval(
	original_date: DateOnly,
	interval: Interval | string
): DateOnly {
	if (typeof interval === 'string')
		interval = parse_interval(interval);

	const { amount, unit } = interval;

	switch (unit) {
		case 'y': return add_years_to_date(original_date, amount);
		case 'm': return add_months_to_date(original_date, amount);
		case 'w': return add_days_to_date(original_date, amount * 7);
		case 'd': return add_days_to_date(original_date, amount);
		default: throw new Error(`Invalid interval: '${unit}'`);
	}
}
