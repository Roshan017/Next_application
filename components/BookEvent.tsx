"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface Events {
  image: string;
  id: string;
  dateTime: string;
  location: string;
  name: string;
  description: string;
  fee?: number;
}

const BookEvent = ({ Event }: { Event: Events }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_email: email,
          event_name: Event.name,
          event_date: new Date(Event.dateTime).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          event_time: new Date(Event.dateTime).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          event_location: Event.location,
          //booking_id: Event.id,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.log("EmailJS Error:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Thank you for signing up 🎉</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : `Rs ${Event.fee ?? 0}`}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
