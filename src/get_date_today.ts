import { create_date_only_from_date } from './create_date_only_from_date';

export function get_date_today() {
	return create_date_only_from_date(new Date());
}
