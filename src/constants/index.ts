export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_PROD = process.env.NODE_ENV === "production";

export const IS_CLIENT = typeof document !== "undefined";
export const IS_SERVER = !IS_CLIENT;

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== "string") {
	throw new Error(
		`Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.

			1. Create .env file at the root of your project.
			2. Add NEXT_PUBLIC_SITE_URL=http://localhost:3000
			3. For other environments (like production), make sure you set the correct URL.
    `,
	);
}

export const SITE_URL = new URL(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_ORIGIN = SITE_URL.origin;

export const DEFINITION = {
	name: "Project Name",
	description: "Descriptive Description",

	title: "Page Title",
	resumeTitle: "- Summary",

	url: SITE_URL || "http://localhost:3000",
	theme: "#000",
};
