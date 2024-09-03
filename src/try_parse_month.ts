import { is_valid_month } from './is_valid_month.js';

export function try_parse_month(text: null): null;
export function try_parse_month(text: undefined): undefined;
export function try_parse_month(text: string | null): number | null;
export function try_parse_month(text: string | null | undefined): number | null | undefined;
export function try_parse_month(text: string | null | undefined): number | null | undefined {
	if (text == null)
		return text;

	const month = +text;

	if (isNaN(month) || !is_valid_month(month))
		return null;

	return month;
}
