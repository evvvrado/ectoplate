import "@/styles/css/globals.css";

import type { Metadata, Viewport } from "next";

import { DEFINITION } from "@/constants";
import { inter } from "@/styles/fonts";

export const metadata: Metadata = {
	title: {
		default: DEFINITION.title,
		template: `%s ${DEFINITION.resumeTitle}`,
	},

	description: DEFINITION.description,
	robots: "/robots.txt",

	openGraph: {
		type: "website",
		title: `Acessar ${DEFINITION.title}`,
		description: DEFINITION.description,
		siteName: DEFINITION.name,
		locale: "pt_BR",
		alternateLocale: "en_US",
		url: DEFINITION.url,
		countryName: "Brasil",

		images: [
			{
				url: "/covers/default.jpg",
				secureUrl: "/covers/default.jpg",
				alt: "Open Graph Visual Image",
				type: "jpg",
			},
			{
				url: "/covers/default.png",
				secureUrl: "/covers/default.png",
				alt: "Open Graph Visual Image",
				type: "png",
			},
		],
	},

	twitter: {
		title: `Acessar ${DEFINITION.title}`,
		description: DEFINITION.description,
		card: "summary_large_image",
		creator: "@evvvrado",

		images: [
			{
				url: "/covers/default.jpg",
				secureUrl: "/covers/default.jpg",
				alt: "Open Graph Visual Image",
				type: "jpg",
			},
			{
				url: "/covers/default.png",
				secureUrl: "/covers/default.png",
				alt: "Open Graph Visual Image",
				type: "png",
			},
		],
	},

	icons: [
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "icon",
			url: "/favicon.ico",
		},
	],

	authors: [
		{
			name: "Everaldo Júnior",
			url: "https://twitter.com/evvvrado",
		},
	],

	appleWebApp: true,
};

export const viewport: Viewport = {
	themeColor: DEFINITION.theme,
	colorScheme: "normal",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${inter.variable}`} lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
