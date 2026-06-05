import { describe, expect, test } from 'vitest';
import { time_ago } from '../src/time_ago.js';

describe('time_ago()', () => {
	const reference = new Date(2000, 2, 20, 20, 0, 0);

	test.each([
		['just now', new Date(2000, 2, 20, 20, 0, 0)],
		['just now', new Date(2000, 2, 20, 19, 59, 30)],
		['a minute ago', new Date(2000, 2, 20, 19, 58, 30)],
		['a few minutes ago', new Date(2000, 2, 20, 19, 55, 0)],
		['10 minutes ago', new Date(2000, 2, 20, 19, 50, 0)],
		['59 minutes ago', new Date(2000, 2, 20, 19, 0, 1)],
		['an hour ago', new Date(2000, 2, 20, 19, 0, 0)],
		['3 hours ago', new Date(2000, 2, 20, 17, 0, 0)],
		['earlier today', new Date(2000, 2, 20, 14, 0, 0)],
		['this morning', new Date(2000, 2, 20, 9, 0, 0)],
		['yesterday evening', new Date(2000, 2, 19, 20, 0, 0)],
		['yesterday', new Date(2000, 2, 19, 14, 0, 0)],
		['yesterday morning', new Date(2000, 2, 19, 9, 0, 0)],
		['2 days ago', new Date(2000, 2, 18, 22, 0, 0)],
		['6 days ago', new Date(2000, 2, 14, 9, 0, 0)],
		// ['Saturday evening', new Date(2000, 2, 18, 20, 0, 0)],
		// ['Friday', new Date(2000, 2, 17, 14, 0, 0)],
		// ['Tuesday morning', new Date(2000, 2, 14, 9, 0, 0)],
		// ['Monday the 13th', new Date(2000, 2, 13, 9, 0, 0)],
		['on the 1st', new Date(2000, 2, 1, 9, 0, 0)],
		['on the 2nd of February', new Date(2000, 1, 2, 9, 0, 0)],
		['on the 15th of September 1999', new Date(1999, 8, 15, 9, 0, 0)],
	])('Happened %s', (expected, date) => {
		expect(time_ago(date, reference)).toEqual(expected);
	});
});
