export const runtime = "edge";

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filters = searchParams.get("filters");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}blogs/?filters=${filters}`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
    },
  });

  const data = await res.json();

  return Response.json(data);
}
