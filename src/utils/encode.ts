const base64ToBytes = (base64: string) => {
	const binString = atob(base64);
	const bytes = new Uint8Array(binString.length);
	for (let i = 0; i < binString.length; i++) {
		bytes[i] = binString.charCodeAt(i);
	}
	return bytes;
};

const bytesToBase64 = (bytes: Uint8Array) => {
	let binString = "";
	for (let i = 0; i < bytes.length; i++) {
		binString += String.fromCharCode(bytes[i]);
	}
	return btoa(binString);
};

export const encodeString = (data: string) => {
	const encoder = new TextEncoder();
	return bytesToBase64(encoder.encode(data));
};

export const decodeString = (data: string) => {
	const decoder = new TextDecoder();
	return decoder.decode(base64ToBytes(data));
};
