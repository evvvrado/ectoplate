export const dynamic = "force-dynamic";

export async function GET() {
	return Response.json({
		ping: "pong",
	});
}
