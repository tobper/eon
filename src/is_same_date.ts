export function is_same_date(
	date_1: { year: number, month: number, day: number; },
	date_2: { year: number, month: number, day: number; }
): boolean {
	return (
		date_1.day === date_2.day &&
		date_1.month === date_2.month &&
		date_1.year === date_2.year
	);
}
