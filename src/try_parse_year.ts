import { is_valid_year } from './is_valid_year.js';

export function try_parse_year(text: null): null;
export function try_parse_year(text: undefined): undefined;
export function try_parse_year(text: string | null): number | null;
export function try_parse_year(text: string | null | undefined): number | null | undefined;
export function try_parse_year(text: string | null | undefined): number | null | undefined {
	if (text == null)
		return text;

	const year = +text;

	if (isNaN(year) || !is_valid_year(year))
		return null;

	return year;
}
