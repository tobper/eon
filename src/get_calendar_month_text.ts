import type { PeriodLike } from './create_period.js';

const locale = 'en';
// const short_format_options: Intl.DateTimeFormatOptions = {
// 	month: 'short',
// };

const long_format_options: Intl.DateTimeFormatOptions = {
	month: 'long',
};

export function get_calendar_month_text(period: PeriodLike): string {
	if (period.first_day.day === 1) {
		const { year, month } = period.first_day;
		const month_text = format_long(month);

		return `${month_text} ${year}`;
	}

	const { year: first_year, month: first_month } = period.first_day;
	const { year: last_year, month: last_month } = period.last_day;
	const first_month_text = format_long(first_month);
	const last_month_text = format_long(last_month);

	return (first_year !== last_year)
		? `${first_month_text} ${first_year} - ${last_month_text} ${last_year}`
		: `${first_month_text} - ${last_month_text} ${first_year}`;
}

function format_long(month: number) {
	return new Date(1, month - 1, 1).toLocaleDateString(locale, long_format_options);
}

// function format_short(month: number) {
// 	return new Date(1, month - 1, 1).toLocaleDateString(locale, short_format_options);
// }
