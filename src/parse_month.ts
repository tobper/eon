import { try_parse_month } from './try_parse_month';

export function parse_month(text: string): number {
	const month = try_parse_month(text);
	if (!month)
		throw new Error(`'${text}' is not a valid month`);

	return month;
}
