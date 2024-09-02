import { create_date_only_from_value } from '@tobper/eon';
import { describe, expect, test } from 'vitest';

describe('create_date_only_from_value()', () => {
	test('returns DateOnly based on a number', () => {
		expect(create_date_only_from_value(20230205)).toMatchObject({
			year: 2023,
			month: 2,
			day: 5,
			key: '2023-02-05',
		});
	});
});
