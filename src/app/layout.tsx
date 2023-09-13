import "./globals.css";

import type { Metadata } from "next";
import { inter } from "../assets/fonts/fonts";
import definition from "@/constants/definition";

export const metadata: Metadata = {
	title: {
		default: definition.title,
		template: `%s ${definition.resumeTitle}`,
	},

	authors: [
		{
			name: "Everaldo Júnior",
			url: "https://twitter.com/evvvrado",
		},
		{
			name: "Insany Design",
			url: "https://insany.design",
		},
	],

	description: definition.description,
	themeColor: definition.theme,
	colorScheme: "normal",
	viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
	manifest: "/manifest.json",
	appleWebApp: true,

	icons: {
		icon: [
			{
				url: "favicon-32x32.png",
				type: "image/png",
				sizes: "32x32",
				rel: "icon",
				// media: "",
				fetchPriority: "auto",
			},
			{
				url: "favicon-96x96.png",
				type: "image/png",
				sizes: "96x96",
				rel: "icon",
				// media: "",
				fetchPriority: "auto",
			},
			{
				url: "favicon-16x16.png",
				type: "image/png",
				sizes: "16x16",
				rel: "icon",
				// media: "",
				fetchPriority: "auto",
			},
		],

		apple: [
			{
				url: "/apple-icon-57x57.png",
				sizes: "57x57",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-60x60.png",
				sizes: "60x60",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-72x72.png",
				sizes: "72x72",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-76x76.png",
				sizes: "76x76",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-114x114.png",
				sizes: "114x114",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-120x120.png",
				sizes: "120x120",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-144x144.png",
				sizes: "144x144",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-152x152.png",
				sizes: "152x152",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-180x180.png",
				sizes: "180x180",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
			{
				url: "/apple-icon-192x192.png",
				sizes: "192x192",
				rel: "apple-touch-icon",
				fetchPriority: "auto",
			},
		],

		shortcut: {
			url: "",
			type: "",
			sizes: "",
			rel: "icon",
			media: "",
			fetchPriority: "auto",
		},
	},

	twitter: {
		title: `Acessar ${definition.title}`,
		description: definition.description,
		card: "summary",

		images: [
			{
				url: "/_og.jpg",
				secureUrl: "/_og.jpg",
				alt: "Open Graph Visual Image",
				type: "png",
			},
			{
				url: "/_og.png",
				secureUrl: "/_og.png",
				alt: "Open Graph Visual Image",
				type: "png",
			},
		],

		// creator: undefined,
		// creatorId: undefined,
		// site: undefined,
		// siteId: undefined,
	},

	openGraph: {
		type: "website",
		title: `Acessar ${definition.title}`,
		description: definition.description,
		siteName: definition.name,
		locale: "pt_BR",
		alternateLocale: "en_US",
		url: definition.url,
		countryName: "Brasil",

		images: [
			{
				url: "/_og.jpg",
				secureUrl: "/_og.jpg",
				alt: "Open Graph Visual Image",
				type: "png",

				// width: "",
				// height: 0,
			},
			{
				url: "/_og.png",
				secureUrl: "/_og.png",
				alt: "Open Graph Visual Image",
				type: "png",

				// width: "",
				// height: 0,
			},
		],

		// audio: "",
		// determiner: "",
		// emails: "",
		// faxNumbers: "",
		// phoneNumbers: "",
		// ttl: 0,
		// videos: "",
	},

	// applicationName: null,
	// creator: null,
	// generator: null,
	// keywords: null,
	// metadataBase: null,
	// publisher: null,
	// referrer: null,
	// robots: null,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
