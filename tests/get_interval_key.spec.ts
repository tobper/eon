import { describe, expect, test } from 'vitest';
import { get_interval_key } from '../src/get_interval_key';

describe('get_interval_key()', () => {
	test('returns interval as a key', () => {
		expect(get_interval_key({ amount: 3, unit: 'm' })).toEqual('3m');
	});
});
