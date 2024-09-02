import { add_months } from './add_months';
import type { Period, PeriodLike } from './create_period';

export function get_previous_period(period: PeriodLike): Period {
	return add_months(period, -1);
}
