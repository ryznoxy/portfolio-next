import { client } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const query = groq`*[_type == "links"] | order(_createdAt desc)`;

  const links = await client.fetch(query);

  return NextResponse.json(links);
}
