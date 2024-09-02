import { create_period, type Period } from './create_period';

export function create_period_from_date(date: Date): Period;
export function create_period_from_date(date: Date | null): Period | null;
export function create_period_from_date(date: Date | undefined): Period | undefined;
export function create_period_from_date(date: Date | null | undefined): Period | null | undefined {
	if (date == null)
		return date;

	return create_period({
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate()
	});
}
