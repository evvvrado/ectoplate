/* eslint-disable no-comments/disallowComments */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const debounce = <T extends (...args: any[]) => void>(
	func: T,
	wait: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>): void => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};

export const throttle = <T extends (...args: any[]) => void>(
	func: T,
	limit: number,
): ((...args: Parameters<T>) => void) => {
	let inThrottle: boolean;

	return (...args: Parameters<T>): void => {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};
