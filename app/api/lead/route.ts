import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ success: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  const lead = await prisma.lead.create({ data: { ...parsed.data, consent: true } });
  return NextResponse.json({ success: true, id: lead.id, redirectUrl: "/success" });
}
