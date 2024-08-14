export function get_current_year() {
	const now = new Date();
	return now.getFullYear();
}

export function parse_year(
	text: null
): null;

export function parse_year(
	text: undefined
): undefined;

export function parse_year(
	text: string | null
): number | null;

export function parse_year(
	text: string | null | undefined
): number | null | undefined;

export function parse_year(
	text: string | null | undefined
): number | null | undefined {
	if (text == null)
		return text;

	const year = +text;

	return isNaN(year) || !is_valid_year(year) ? null : year;
}

export function is_valid_year(
	year: unknown
): year is number {
	return (
		typeof year === 'number' &&
		year >= 1970 &&
		year < 2100
	);
}

export function validate_year(
	year: unknown
): number {
	if (!is_valid_year(year))
		throw new Error(`Invalid year: ${year}`);

	return year;
}
