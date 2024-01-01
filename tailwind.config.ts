import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export const colors = {
	black: "#000",
	white: "#fff",
	primary: "#ff0ef0",
};

const config: Config = {
	content: ["./src/**/*.tsx"],

	theme: {
		screens: {
			lg_desktop: { max: "1920px" },
			md_desktop: { max: "1440px" },
			sm_desktop: { max: "1366px" },
			es_desktop: { max: "1280px" },

			lg_tablet: { max: "1050px" },
			md_tablet: { max: "990px" },
			sm_tablet: { max: "730px" },
			es_tablet: { max: "600px" },

			lg_phone: { max: "490px" },
			md_phone: { max: "414px" },
			sm_phone: { max: "360px" },
			es_phone: { max: "320px" },
		},

		zIndex: {
			content: "0",
			elements: "1",
			header: "2",
			modal: "3",
			ovni: "999",
		},

		colors: colors,

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

		extend: {
			fontSize: {},
			lineHeight: {},
		},
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

				".center": {
					"@apply grid place-items-center": {},
				},
			});
		},
	],
};
export default config;
