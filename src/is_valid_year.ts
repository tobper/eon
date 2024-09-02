export function is_valid_year(
	year: unknown
): year is number {
	return (
		typeof year === 'number' &&
		year >= 1970 &&
		year < 2100
	);
}
