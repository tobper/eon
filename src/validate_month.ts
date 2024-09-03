import { is_valid_month } from './is_valid_month.js';

export function validate_month(month: unknown): number {
	if (!is_valid_month(month))
		throw new Error(`Invalid month: ${month}`);

	return month;
}
