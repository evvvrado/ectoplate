export const validateCPF = (c: string): boolean => {
	c = c.replace(/\D/g, "");
	if (
		"00000000000" === c ||
		"11111111111" === c ||
		"22222222222" === c ||
		"33333333333" === c ||
		"44444444444" === c ||
		"55555555555" === c ||
		"66666666666" === c ||
		"77777777777" === c ||
		"88888888888" === c ||
		"99999999999" === c
	)
		return !1;
	let t = 0,
		n = 0;
	for (n = 0; n < 9; n++) t += Number(c.charAt(n)) * (10 - n);
	const r = t % 11;
	let o = 11 - (r % 11);
	if (o >= 10) o = 0;
	if (o !== Number(c.charAt(9))) return !1;
	let a = 0;
	for (n = 0; n < 10; n++) a += Number(c.charAt(n)) * (11 - n);
	const i = a % 11;
	let s = 11 - (i % 11);
	if (s >= 10) s = 0;
	return s === Number(c.charAt(10));
};

export const validateCNPJ = (cnpj: string): boolean => {
	cnpj = cnpj.replace(/\D/g, "");
	if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return !1;
	const t = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
		n = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let r = 0;
	for (let o = 0; o < 12; o++) r += parseInt(cnpj.charAt(o)) * t[o];
	let a = r % 11;
	const i = a < 2 ? 0 : 11 - a;
	if (parseInt(cnpj.charAt(12)) !== i) return !1;
	r = 0;
	for (let o = 0; o < 13; o++) r += parseInt(cnpj.charAt(o)) * n[o];
	a = r % 11;
	const s = a < 2 ? 0 : 11 - a;
	return parseInt(cnpj.charAt(13)) === s;
};

export const validateCEP = async (cep: string): Promise<boolean> => {
	cep = cep.replace(/\D/g, "");
	if (8 !== cep.length) return !1;
	try {
		const e = await fetch(`https://viacep.com.br/ws/${cep}/json/`),
			t = await e.json();
		return !!t && !t.erro;
	} catch (e) {
		return console.error("Error fetching CEP data:", e), !1;
	}
};

export const monthsInPortuguese = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Septembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];
