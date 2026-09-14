import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.items?.length) {
      return NextResponse.json({ error: "Order must contain at least one item." }, { status: 400 });
    }

    const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
    return NextResponse.json({ orderId: `XPLUS-${suffix}` }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to create order." }, { status: 400 });
  }
}
