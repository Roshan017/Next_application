import mongoose, { Schema, Document, Model } from "mongoose";
import { nanoid } from "nanoid";
import { Interface } from "readline";

export interface IBooking extends Document {
  bookingId: string;
  eventId: string;
  user_mail: string;
}

const BookingSchema = new Schema<IBooking>(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    eventId: {
      type: String,
      required: true,
      ref: "Event",
    },

    user_mail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("booking", BookingSchema);
