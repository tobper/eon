import type { IntervalLike } from './interval';

export function format_interval(
	{ amount, unit }: IntervalLike
) {
	if (amount === 1) {
		const values = { y: 'Yearly', m: 'Monthly', w: 'Weekly', d: 'Daily' };
		return values[unit];
	}

	if (amount === 2) {
		const values = { y: 'year', m: 'month', w: 'week', d: 'day' };
		return `Every other ${values[unit]}`;
	}

	if (amount === 3 && unit === 'm')
		return 'Quarterly';

	const values = { y: 'years', m: 'months', w: 'weeks', d: 'days' };
	return `Every ${amount} ${values[unit]}`;
}
