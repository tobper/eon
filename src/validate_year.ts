import { is_valid_year } from './is_valid_year.js';

export function validate_year(year: unknown): number {
	if (!is_valid_year(year))
		throw new Error(`Invalid year: ${year}`);

	return year;
}
