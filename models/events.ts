import mongoose, { Schema, Document, Model } from "mongoose";
import { nanoid } from "nanoid";

export interface IEvent extends Document {
  id: string;
  name: string;
  image?: string;
  dateTime: Date;
  location: string;
  description: string;
  venue: string;
  fee?: number;
  organiser: string;
  overview: string;
  abt_the_organiser: string;
  tags: string[];
  mode: "Online" | "Offline" | "Hybrid";
}

const EventSchema = new Schema<IEvent>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    name: { type: String, required: true },
    image: { type: String },
    dateTime: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    venue: { type: String, required: true },
    fee: { type: Number },
    organiser: { type: String, required: true },
    overview: { type: String },
    abt_the_organiser: { type: String },
    tags: {
      type: [String],
      default: [],
    },
    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
