declare global {
	interface Window {
		gtag: (...args: unknown[]) => void;
	}
}

type PageProps = {
	params: { locale: Locale };
};
