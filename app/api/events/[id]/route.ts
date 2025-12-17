import { NextRequest, NextResponse } from "next/server";

import { ConnectDB } from "@/lib/mongoose";
import { Event } from "@/models/events";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await ConnectDB();

    const { id } = await params;

    const event = await Event.findOne({ id });

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Unable to Fetch Event" },
      { status: 500 }
    );
  }
}
