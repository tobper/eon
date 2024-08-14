export interface DateOnly {
	year: number;
	month: number;
	day: number;
	key: string;
}

export interface DateOnlyLike {
	year: number;
	month: number;
	day: number;
}

export type DateOnlyArgs =
	| [date: DateOnlyLike]
	| [year: number, month: number, day: number];

export function create_date_only(
	...args: DateOnlyArgs
): DateOnly {
	const { year, month, day } = extract_args(...args);
	const key = `${year}-${pad_number(month)}-${pad_number(day)}`;

	return Object.freeze({
		year,
		month,
		day,
		key,
		valueOf() { return key; },
	});
}

export function create_date_only_from_date(date: Date): DateOnly;
export function create_date_only_from_date(date: Date | null): DateOnly | null;
export function create_date_only_from_date(date: Date | undefined): DateOnly | undefined;
export function create_date_only_from_date(date: Date | null | undefined): DateOnly | null | undefined {
	if (date == null)
		return date;

	return create_date_only({
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate()
	});
}

export function create_date_only_from_utc_date(date: Date): DateOnly;
export function create_date_only_from_utc_date(date: Date | null): DateOnly | null;
export function create_date_only_from_utc_date(date: Date | undefined): DateOnly | undefined;
export function create_date_only_from_utc_date(date: Date | null | undefined): DateOnly | null | undefined {
	if (date == null)
		return date;

	return create_date_only({
		year: date.getUTCFullYear(),
		month: date.getUTCMonth() + 1,
		day: date.getUTCDate()
	});
}

export function create_date_only_from_value(value: number): DateOnly;
export function create_date_only_from_value(value: number | null): DateOnly | null;
export function create_date_only_from_value(value: number | undefined): DateOnly | undefined;
export function create_date_only_from_value(value: number | null | undefined): DateOnly | null | undefined {
	if (value == null)
		return value;

	return create_date_only({
		year: Math.round(value / 10000),
		month: Math.round(value / 100) % 100,
		day: value % 100
	});
}

export function parse_date_only(text: string): DateOnly {
	const date = try_parse_date_only(text);
	if (!date)
		throw new Error(`'${text}' is not a valid date`);

	return date;
}

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

function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}

function extract_args(...args: DateOnlyArgs): DateOnlyLike {
	const [year, month, day] = args.length === 1
		? [args[0].year, args[0].month, args[0].day]
		: args;

	const date = new Date(year, month - 1, day);
	const invalid_date =
		date.getFullYear() !== year ||
		date.getMonth() !== month - 1 ||
		date.getDate() !== day;

	if (invalid_date)
		throw new Error(`'${year}-${month}-${day}' is not a valid date`);

	return { year, month, day };
}

const parse_pattern = /^(19[789]\d|20\d{2})-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])/;
