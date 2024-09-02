import { create_interval, interval_unit, type Interval, type IntervalUnit } from './create_interval';

export function try_parse_interval(text: string): Interval | null {
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

const valid_units = Object.values(interval_unit);
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
