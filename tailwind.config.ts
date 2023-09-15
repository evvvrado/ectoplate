import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
	content: ["./src/**/*.tsx"],

	theme: {
		screens: {
			es_phone: "320px",
			sm_phone: "390px",
			md_phone: "475px",
			lg_phone: "600px",
			sm_tablet: "768px",
			md_tablet: "990px",
			lg_tablet: "1050px",
			es_desktop: "1280px",
			sm_desktop: "1366px",
			md_desktop: "1440px",
			lg_desktop: "1920px",
		},

		colors: {
			black: "#000",
			white: "#fff",

			primary: "#f00",
		},

		fontFamily: {
			sans: [
				"var(--font-inter)",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"sans-serif",
			],
		},

		fontSize: {},
		lineHeight: {},
		extend: {},
	},

	plugins: [
		({ addUtilities }: PluginAPI) => {
			addUtilities({
				".wrapper": {
					maxWidth: "calc(1216px + 48px)",
					"@apply mx-auto px-6": {},
				},

				".frame": {
					"@apply h-full w-full object-cover": {},
				},
			});
		},
	],
};
export default config;
