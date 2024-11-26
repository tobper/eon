import { add_days } from './add_days.js';
import { add_interval } from './add_interval.js';
import { create_date_only, type DateOnly } from './create_date_only.js';
import { create_interval, type Interval } from './create_interval.js';
import { parse_interval } from './parse_interval.js';

export interface Period {
	first_day: DateOnly;
	last_day: DateOnly;
	length: Interval;
}

export function create_period(
	start_date: {
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
	...args: ObjectArgs | NumberArgs
): Period {
	const [start_year, start_month, start_day = 1, length_arg = default_interval] =
		is_object_args(args)
			? [args[0].year, args[0].month, args[0].day, args[1]]
			: args;

	const length = typeof length_arg === 'string' ? parse_interval(length_arg) : length_arg;
	const first_day = create_date_only(start_year, start_month, start_day);
	const last_day = add_days(add_interval(first_day, length), -1);

	return Object.freeze({ first_day, last_day, length });
}

const default_interval = create_interval(1, 'm');

type ObjectArgs = [start_date: { year: number; month: number; day?: number; }, length?: Interval | string];
type NumberArgs = [start_year: number, start_month: number, start_day?: number, length?: Interval | string];

function is_object_args(args: ObjectArgs | NumberArgs): args is ObjectArgs {
	return typeof args[0] === 'object';
}
