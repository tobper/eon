import { add_months } from './add_months.js';
import type { Period } from './create_period.js';

export function get_previous_period(period: Period): Period {
	return add_months(period, -1);
}
