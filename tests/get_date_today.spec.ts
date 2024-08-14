import { get_date_today } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('get_date_today()', () => {
	test('returns current date', () => {
		const now = new Date();

		expect(get_date_today()).toMatchObject({
			year: now.getFullYear(),
			month: now.getMonth() + 1,
			day: now.getDate()
		});
	});
});
