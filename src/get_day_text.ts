import type { DateOnly } from './create_date_only';
import { eon } from './eon';

let locale = eon.locale;
let plural = get_plural_rules();

export function get_day_text(day: number): string

export function get_day_text(date: DateOnly): string

export function get_day_text(arg: number | DateOnly) {
	if (locale !== eon.locale) {
		locale = eon.locale;
		plural = get_plural_rules();
	}

	const day = typeof arg === 'number' ? arg : arg.day;

	return `${day}${eon.day_suffixes.get(plural.select(day))}`;
}

function get_plural_rules() {
	return new Intl.PluralRules(eon.locale, { type: 'ordinal' });
}
