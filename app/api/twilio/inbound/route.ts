import { NextResponse } from "next/server";
export async function POST() {
  return new NextResponse(`<Response><Message>Thanks — send address, beds/baths, and 2 photos for an instant quote.</Message></Response>`, { headers: { "Content-Type": "text/xml" } });
}
