import { create_calendar_month, type CalendarMonth } from './create_calendar_month';

export function create_calendar_month_from_date(date: Date): CalendarMonth {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;

	return create_calendar_month(year, month);
}
