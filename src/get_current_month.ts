export function get_current_month() {
	const now = new Date();

	return now.getMonth() + 1;
}
