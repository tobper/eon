import { format_interval } from './format_interval';

export type IntervalUnit = 'y' | 'm' | 'w' | 'd';

export interface Interval {
	amount: number;
	unit: IntervalUnit;
}

export interface IntervalLike {
	amount: number;
	unit: IntervalUnit;
}

export const interval_unit = Object.freeze({
	year: 'y',
	month: 'm',
	week: 'w',
	day: 'd',
});

const interval_units = Object.values(interval_unit);

export function create_interval(
	interval: IntervalLike
): Interval;

export function create_interval(
	amount: number,
	unit: IntervalUnit
): Interval;

export function create_interval(
	...args: [interval: IntervalLike] | [amount: number, unit: IntervalUnit]
): Interval {
	const [amount, unit] = args.length === 1
		? [args[0].amount, args[0].unit]
		: args;

	if (isNaN(amount))
		throw new Error('Amount is not a number');

	if (amount < 1)
		throw new Error(`Amount can't be less than 1: ${amount}`);

	if (!interval_units.includes(unit))
		throw new Error(`Invalid unit: ${unit}`);

	// TODO: Add key...
	return Object.freeze({
		amount,
		unit,
		toString() { return format_interval({ amount, unit }); },
		valueOf() { return get_interval_value({ amount, unit }); }
	});
}

export function parse_interval(
	text: string
): Interval {
	const interval = try_parse_interval(text);
	if (!interval)
		throw new Error(`'${text}' is not a valid interval`);

	return interval;
}

export function try_parse_interval(
	text: string
): Interval | null {
	if (!text)
		return null;

	const lower_value = text.toLowerCase();

	for (const [pattern, matcher] of interval_parse_patterns) {
		const match = lower_value.match(pattern);
		if (match)
			return matcher(match);
	}

	return null;
}

export function get_interval_value(
	{ amount, unit }: IntervalLike
): string {
	return `${amount}${unit}`;
}

const valid_units = Object.values(interval_units);
const interval_parse_patterns: [RegExp, (match: RegExpMatchArray) => Interval][] = [
	[new RegExp(`(\\d+)([${valid_units}])`), ([, amount, unit]) => create_interval(+amount, unit as IntervalUnit)],

	[/yearly/, () => create_interval(1, 'y')],
	[/every other year/, () => create_interval(2, 'y')],
	[/every (\d+) year/, ([, years]) => create_interval(+years, 'y')],

	[/weekly/, () => create_interval(1, 'w')],
	[/every other week/, () => create_interval(2, 'w')],
	[/every (\d+) weeks/, ([, weeks]) => create_interval(+weeks, 'w')],

	[/monthly/, () => create_interval(1, 'm')],
	[/every other month/, () => create_interval(2, 'm')],
	[/quarterly/, () => create_interval(3, 'm')],
	[/every (\d+) months/, ([, months]) => create_interval(+months, 'm')],

	[/daily/, () => create_interval(1, 'd')],
	[/every other day/, () => create_interval(2, 'd')],
	[/every (\d+) days/, ([, days]) => create_interval(+days, 'd')],
];
