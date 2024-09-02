import { format_interval } from './format_interval';

export type IntervalUnit = 'y' | 'm' | 'w' | 'd';

export interface Interval {
	amount: number;
	unit: IntervalUnit;
	key: string;
	text: string;
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
	...args:
		| [interval: IntervalLike]
		| [amount: number, unit: IntervalUnit]
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

	const key = `${amount}${unit}`;
	const text = format_interval({ amount, unit });

	return Object.freeze({
		amount,
		unit,
		key,
		text,
		valueOf() { return key; }
	});
}
