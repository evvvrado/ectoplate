export const lerp = (start: number, end: number, speed: number) =>
	start + (end - start) * speed;

export const clamp = (num: number, min: number, max: number) =>
	num <= min ? min : num >= max ? max : num;
