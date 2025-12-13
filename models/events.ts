import mongoose, { Schema, Document, Model } from "mongoose";
import { nanoid } from "nanoid";

export interface IEvent extends Document {
  id: string;
  name: string;
  image?: string;
  dateTime: Date;
  location: string;
  description: string;
  fee?: number;
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
    fee: { type: Number },
  },
  { timestamps: true }
);

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
