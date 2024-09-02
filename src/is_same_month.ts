export function is_same_month(
	date_1: { year: number, month: number; },
	date_2: { year: number, month: number; }
): boolean {
	return (
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
