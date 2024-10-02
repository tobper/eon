import { create_date_only, type DateOnly } from './create_date_only.js';

export function try_parse_date_only(text: string): DateOnly | null {
	const match = text.match(parse_pattern);
	if (!match)
		return null;

	return create_date_only({
		year: +match[1],
		month: +match[2],
		day: +match[3]
	});
}

const parse_pattern = /^(19[789]\d|20\d{2})-(0?[1-9]|1[012])-(0?[1-9]|[12]\d|3[01])/;
