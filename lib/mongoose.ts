/* eslint-disable prefer-const */
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MongoDB_URL || "";

if (!MONGODB_URL) {
  throw new Error("MONGO_DB URL is not defined");
}

interface MongooseConnect {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached = globalThis as unknown as { mongoose: MongooseConnect };

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export async function ConnectDB(): Promise<Mongoose> {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    cached.mongoose.promise = mongoose
      .connect(MONGODB_URL, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }
  cached.mongoose.conn = await cached.mongoose.promise;

  return cached.mongoose.conn;
}
