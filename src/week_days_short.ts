const locale = 'en';

const weekday_format_options: Intl.DateTimeFormatOptions = {
	weekday: 'short'
};

export const week_days_short =
	Object.freeze(
		Array
			.from({ length: 7 })
			.map((_, index) => new Date(1970, 0, 5 + index).toLocaleString(locale, weekday_format_options))
	);
