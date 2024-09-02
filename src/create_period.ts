import { add_days } from './add_days';
import { add_months } from './add_months';
import { create_date_only, type DateOnly, type DateOnlyLike } from './create_date_only';

export interface Period {
	first_day: DateOnly;
	last_day: DateOnly;
	key: string;
}

export interface PeriodLike {
	first_day: DateOnlyLike;
	last_day: DateOnlyLike;
}

export function create_period(
	...args:
		| [start_date: { year: number, month: number, day?: number; }]
		| [start_year: number, start_month: number, start_day?: number]
): Period {
	const [start_year, start_month, start_day = 1] = args.length === 1
		? [args[0].year, args[0].month, args[0].day]
		: args;

	const first_day = create_date_only(start_year, start_month, start_day);
	const last_day = add_days(add_months(first_day, 1), -1);
	const { key } = first_day;

	return Object.freeze({
		first_day,
		last_day,
		key,
		valueOf() { return key; }
	});
}
