export const eon = create_eon();

function create_eon() {
	const day_suffixes = new Map([
		['en', new Map([
			['one', 'st'],
			['two', 'nd'],
			['few', 'rd'],
			['other', 'th'],
		])]
	]);

	const month_format_short: Intl.DateTimeFormatOptions = {
		month: 'short'
	};

	const month_format_long: Intl.DateTimeFormatOptions = {
		month: 'long'
	};

	const weekday_format_short: Intl.DateTimeFormatOptions = {
		weekday: 'short'
	};

	let values = compile('en');

	return {
		get locale() { return values.locale; },
		set locale(new_locale) { values = compile(new_locale); },
		get day_suffixes() { return values.day_suffixes; },
		get months_long() { return values.months_long; },
		get months_short() { return values.months_short; },
		get week_days_short() { return values.week_days_short; },
	};

	function compile(locale: string) {
		return {
			locale,
			day_suffixes: day_suffixes.get(locale) ?? new Map<string, string>(),
			months_long: Object.freeze(
				Array.from(
					{ length: 12 },
					(_, index) => new Date(1970, index, 1).toLocaleString(locale, month_format_long)
				)
			),
			months_short: Object.freeze(
				Array.from(
					{ length: 12 },
					(_, index) => new Date(1970, index, 1).toLocaleString(locale, month_format_short)
				)
			),
			week_days_short: Object.freeze(
				Array.from(
					{ length: 7 },
					(_, index) => new Date(1970, 0, 5 + index).toLocaleString(locale, weekday_format_short)
				)
			),
			plural: new Intl.PluralRules(locale, { type: 'ordinal' }),
		};
	}
}
