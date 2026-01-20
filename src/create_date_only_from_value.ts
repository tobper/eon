import { create_date_only } from './create_date_only.js';
import type { DateOnly } from './types.js';

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
