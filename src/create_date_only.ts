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

export function create_date_only(
	...args:
		| [date: DateOnlyLike]
		| [year: number, month: number, day: number]
): DateOnly {
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

	const key = `${year}-${pad_number(month)}-${pad_number(day)}`;

	return Object.freeze({
		year,
		month,
		day,
		key,
		valueOf() { return key; }
	});
}
function pad_number(value: number) {
	return value.toString().padStart(2, '0');
}
