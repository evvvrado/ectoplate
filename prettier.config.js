module.exports = {
	tabWidth: 4,
	endOfLine: "auto",
	charset: "utf-8",
	trimTrailingWhitespace: true,
	insertFinalNewline: true,
	singleQuote: false,
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	importOrder: [
		"^react$",
		"",
		"^next$",
		"^next/(.*)$",
		"",
		"^(@)(/.*)$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[.]",
	],
};
