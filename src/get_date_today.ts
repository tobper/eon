import { create_date_only_from_date } from './date_only.js';

export function get_date_today() {
	return create_date_only_from_date(new Date());
}
