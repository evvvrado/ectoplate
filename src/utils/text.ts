export const slugify = (input: string): string => {
	return input
		.toLowerCase()
		.replace(/[^a-z0-9-]/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};

export const removeSpecialChars = (input: string): string => {
	return input.replace(/[^\w\s]/gi, "");
};
