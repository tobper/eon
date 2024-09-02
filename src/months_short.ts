const locale = 'en';
const format_options: Intl.DateTimeFormatOptions = {
	month: 'short'
};

export const months_short =
	Object.freeze(
		Array
			.from({ length: 12 })
			.map((_, index) => new Date(1970, index, 1).toLocaleString(locale, format_options))
	);
