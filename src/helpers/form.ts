import { validateCNPJ, validateCPF } from "@/utils/brazil";

import { FieldValues, RegisterOptions } from "react-hook-form";

const defaultRequiredMessages: Record<string, string> = {
	birth: "This field cannot be left blank.",
	email: "This field cannot be left blank.",
	date: "This field cannot be left blank.",
	cpf: "This field cannot be left blank.",
	cnpj: "This field cannot be left blank.",
	text: "This field cannot be left blank.",
	cep: "This field cannot be left blank.",
	currency: "This field cannot be left blank.",
	name: "This field cannot be left blank.",
	phone: "This field cannot be left blank.",
	select: "Select an option.",
};

const regexPatterns: Record<string, RegExp> = {
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	currency: /\b\d{1,3}(?:\.\d{3})*(?:,\d{2})?\b/,
	phone: /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/,
	cpf: /(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)/,
	cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
	cep: /^\d{5}-\d{3}$/,
	name: /^(?:[a-zA-ZÀ-ÖØ-öø-ÿ]+\s){1,}[a-zA-ZÀ-ÖØ-öø-ÿ]+$/,
};

const validators: Record<string, (value: string) => boolean | string> = {
	email: (value: string) =>
		regexPatterns.email.test(value) || "Invalid e-mail.",
	birth: (value: string) => {
		const [day, month, year] = value.split("/");

		const date = new Date(`${month}-${day}-${year}`);

		const currentDate = new Date();
		const eighteenYearsAgo = new Date(
			currentDate.getFullYear() - 18,
			currentDate.getMonth(),
			currentDate.getDate(),
		);

		const hundredYearsAgo = new Date(
			currentDate.getFullYear() - 130,
			currentDate.getMonth(),
			currentDate.getDate(),
		);
		return (
			(date.toString() !== "Invalid Date" &&
				date < eighteenYearsAgo &&
				date > hundredYearsAgo) ||
			"Enter a valid date."
		);
	},
	currency: (value: string) =>
		regexPatterns.currency.test(value) || "Enter a valid value.",
	date: (value: string) => {
		const [day, month, year] = value.split("/");

		const date = new Date(`${month}-${day}-${year}`);
		const currentDate = new Date();
		const thousandYearsAgo = new Date(
			currentDate.getFullYear() - 1000,
			currentDate.getMonth(),
			currentDate.getDate(),
		);
		return (
			(date.toString() !== "Invalid Date" && date > thousandYearsAgo) ||
			"Enter a valid date."
		);
	},
	select: (value: string) => !!value,
	phone: (value: string) =>
		regexPatterns.phone.test(value) || "Enter a valid phone number.",
	cpf: (value: string) =>
		(regexPatterns.cpf.test(value) && validateCPF(value)) ||
		"Enter a valid CPF.",
	cnpj: (value: string) =>
		(regexPatterns.cnpj.test(value) && validateCNPJ(value)) ||
		"Enter a valid CNPJ.",
	text: (value: string) => !!value,
	cep: (value: string) =>
		regexPatterns.cep.test(value) || "Enter a valid postal code.",
	name: (value: string) =>
		regexPatterns.name.test(value) ||
		"Invalid name. Use only letters and avoid special characters.",
};

const valueTransformers: Record<
	string,
	((value: string) => string) | undefined
> = {
	birth: undefined,
	email: undefined,
	phone: undefined,
	date: undefined,
	cpf: undefined,
	cnpj: undefined,
	text: undefined,
	select: undefined,
	cep: undefined,
	currency: undefined,
	name: (value: string) =>
		value
			.trim()
			.split(" ")
			.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" "),
};

const onChangeHandlers: Record<
	string,
	((event: React.ChangeEvent<HTMLInputElement>) => string | void) | undefined
> = {
	birth: undefined,
	email: undefined,
	phone: undefined,
	date: undefined,
	select: undefined,
	cpf: undefined,
	cnpj: undefined,
	text: undefined,
	cep: undefined,
	currency: (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		const sanitized = value.replace(/\D/g, "");
		const formatted = sanitized
			.replace(/(\d{2})$/g, ",$1")
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

		event.target.value = formatted;
	},
	name: undefined,
};

export const helperRegister = (
	type:
		| "date"
		| "cnpj"
		| "cpf"
		| "text"
		| "cep"
		| "name"
		| "phone"
		| "email"
		| "birth"
		| "currency"
		| "select",
	require?: boolean,
): RegisterOptions<FieldValues> => {
	const required = require ? defaultRequiredMessages[type] : false;
	const validate = validators[type];
	const setValueAs = valueTransformers[type];
	const onChange = onChangeHandlers[type];

	return {
		required,
		validate,
		setValueAs,
		onChange,
	};
};
