export const lerp = (start: number, end: number, t: number): number => {
	return start * (1 - t) + end * t;
};

export const clamp = (num: number, min: number, max: number) =>
	num <= min ? min : num >= max ? max : num;

export const proportionalValue = (a: number, b: number, c: number): number => {
	return (c * b) / a;
};
