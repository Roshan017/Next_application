import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import { ConnectDB } from "@/lib/mongoose";
import { Event } from "@/models/events";
export async function GET() {
  try {
    await ConnectDB();
    console.log("Database connected successfully");

    const events = await Event.find();

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Database connection failed:", error);

    return NextResponse.json(
      { message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();

    const formData = await req.formData();

    // ---------- Extract fields ----------
    const name = formData.get("name") as string;
    const dateTime = formData.get("dateTime") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;
    const venue = formData.get("venue") as string;
    const organiser = formData.get("organiser") as string;
    const overview = formData.get("overview") as string;
    const abt_the_organiser = formData.get("abt_the_organiser") as string;
    const modeRaw = formData.get("mode") as string;
    const imageFile = formData.get("image") as File | null;
    const feeRaw = formData.get("fee") as string | null;
    const tagsRaw = formData.get("tags") as string | null;

    const fee = feeRaw ? Number(feeRaw) : undefined;

    const tags = tagsRaw
      ? tagsRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    const mode =
      modeRaw?.charAt(0).toUpperCase() + modeRaw?.slice(1).toLowerCase();

    const missing: string[] = [];
    if (!name?.trim()) missing.push("name");
    if (!dateTime) missing.push("dateTime");
    if (!location?.trim()) missing.push("location");
    if (!description?.trim()) missing.push("description");
    if (!venue?.trim()) missing.push("venue");
    if (!organiser?.trim()) missing.push("organiser");
    if (!mode) missing.push("mode");

    if (missing.length > 0) {
      return NextResponse.json(
        { message: "Missing Required Fields", missing },
        { status: 400 }
      );
    }

    const existingEvent = await Event.findOne({
      name: new RegExp(`^${name}$`, "i"),
    });

    if (existingEvent) {
      return NextResponse.json(
        { message: "An event with this name already exists" },
        { status: 409 }
      );
    }

    let imageUrl: string | undefined;

    if (imageFile) {
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(imageFile.type)) {
        return NextResponse.json(
          { message: "Invalid image format" },
          { status: 400 }
        );
      }

      if (imageFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { message: "Image size must be less than 5MB" },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const uploadResult = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "Envolv", resource_type: "image" },
            (error, result) => {
              if (error) reject(error);
              resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    const event = await Event.create({
      name,
      image: imageUrl,
      dateTime: new Date(dateTime),
      location,
      description,
      venue,
      fee,
      organiser,
      overview,
      abt_the_organiser,
      tags,
      mode: mode as "Online" | "Offline" | "Hybrid",
    });

    return NextResponse.json(
      { message: "Event created successfully", event },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/events error:", error);
    return NextResponse.json(
      { message: "Error creating Event" },
      { status: 500 }
    );
  }
}
