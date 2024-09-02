import { try_parse_year } from './try_parse_year';

export function parse_year(text: string): number {
	const year = try_parse_year(text);
	if (!year)
		throw new Error(`'${text}' is not a valid year`);

	return year;
}
