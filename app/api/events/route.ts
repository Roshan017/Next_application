import { ConnectDB } from "@/lib/mongoose";
import { Event } from "@/models/events";

export async function GET() {
  const conn = await ConnectDB();
  if (!conn) {
    console.log("Database connection failed");
  }
  console.log("Database connected successfully");
  const events = await Event.find();
  return Response.json(events);
}
