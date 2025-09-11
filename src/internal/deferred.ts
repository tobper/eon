export function deferred<
	Self,
	Params extends unknown[],
	Result
>(
	args: Params | [Self, ...Params],
	func: (...args: [Self, ...Params]) => Result
): Result | ((first: Self) => Result) {
	return deferred_call(args, func)
		? (first: Self) => func(first, ...args)
		: func(...args);
}

function deferred_call<
	Self,
	Params extends unknown[]
>(
	args: [Self, ...Params] | Params,
	func: (...args: [Self, ...Params]) => unknown
): args is Params {
	return args.length < func.length;
}
