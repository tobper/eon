const locale = 'en';

const short_month_format_options: Intl.DateTimeFormatOptions = {
	month: 'short'
};

export const months_short =
	Object.freeze(
		Array
			.from({ length: 12 })
			.map((_, index) => new Date(1970, index, 1).toLocaleString(locale, short_month_format_options))
	);

export function get_current_Month() {
	const now = new Date();
	return now.getMonth() + 1;
}

export function is_valid_month(
	month: unknown
): month is number {
	return (
		typeof month === 'number' &&
		month >= 1 &&
		month <= 12
	);
}

export function parse_month(
	text: null
): null;

export function parse_month(
	text: undefined
): undefined;

export function parse_month(
	text: string | null
): number | null;

export function parse_month(
	text: string | null | undefined
): number | null | undefined;

export function parse_month(
	text: string | null | undefined
): number | null | undefined {
	if (text == null)
		return text;

	const month = +text;

	return isNaN(month) || !is_valid_month(month) ? null : month;
}

export function validate_month(
	month: unknown
): number {
	if (!is_valid_month(month))
		throw new Error(`Invalid month: ${month}`);

	return month;
}
