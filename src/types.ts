export interface CalendarDate extends DateOnly {
	same_month: boolean;
	weekend: boolean;
}

export interface CalendarMonth {
	year: number;
	month: number;
}

export interface DateOnly {
	year: number;
	month: number;
	day: number;
}

export interface Interval {
	amount: number;
	unit: IntervalUnit;
}

export type IntervalUnit = 'y' | 'm' | 'w' | 'd';

export interface Period {
	first_day: DateOnly;
	last_day: DateOnly;
	length: Interval;
}
