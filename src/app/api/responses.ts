import type { NextApiResponse } from "next";

export const formatError = (
	error: unknown,
): { message: string; name?: string } => {
	try {
		if (error instanceof Error) {
			return { message: error.message, name: error.name };
		}
		return { message: String(error) };
	} catch (error) {
		return { message: "An unknown error occurred." };
	}
};

export const success = (
	res: NextApiResponse,
	json: { [key: string]: unknown } = {},
) => {
	return res.status(200).json(json);
};

export const badRequest = (
	res: NextApiResponse,
	error: unknown = "Bad Request",
) => {
	console.error(error);
	return res.status(400).json({ error: formatError(error) });
};

export const notAuthorized = (
	res: NextApiResponse,
	error: unknown = "Not Authorized",
) => {
	console.error(error);
	return res.status(401).json({ error: formatError(error) });
};

export const notFound = (
	res: NextApiResponse,
	error: unknown = "Not Found",
) => {
	console.error(error);
	return res.status(404).json({ error: formatError(error) });
};

export const internalServerError = (
	res: NextApiResponse,
	error: unknown,
	code = 500,
) => {
	console.error(error);
	return res.status(code).json({ error: formatError(error) });
};
