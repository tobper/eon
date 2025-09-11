
class DO {
	#year: number;
	#month: number;
	#day: number;

	public static parse(input: string) {
		return new DO();
	}

	public add(interval: I | string) {
		return new DO();
	}

	public subtract(interval: I | string) {
		return new DO();
	}
}

class I {
	public static parse(input: string) {
		return new I();
	}
}

class P {
	#start_date: DO;
	#length: I;
	#next?: P;
	#previous?: P;

	get start_date() { return this.#start_date; }
	get length() { return this.#length; }

	get next() {
		if (!this.#next) {
			const next_start_date = this.#start_date.add(this.#length);
			this.#next = new P(next_start_date, this.#length);
		}

		return this.#next;
	}

	get previous() {
		if (!this.#previous) {
			const previous_start_date = this.#start_date.subtract(this.#length);
			this.#previous = new P(previous_start_date, this.#length);
		}

		return this.#previous;
	}

	constructor(
		start_date: DO | string,
		length: I | string
	) {
		this.#start_date =
			typeof start_date === 'string'
				? DO.parse(start_date)
				: start_date;

		this.#length =
			typeof length === 'string'
				? I.parse(length)
				: length;
	}
}
