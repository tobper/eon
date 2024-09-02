export function is_valid_month(
	month: unknown
): month is number {
	return (
		typeof month === 'number' &&
		month >= 1 &&
		month <= 12
	);
}
