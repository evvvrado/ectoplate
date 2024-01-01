import { twMerge } from "tailwind-merge";

export const cn = (...classNames: (string | undefined)[]) => {
	return twMerge(...classNames);
};
