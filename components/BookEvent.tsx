"use client";
import React from "react";
import { useState, useEffect } from "react";

const BookEvent = ({ fee }: { fee: number }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Thank You for signing up</p>
      ) : (
        <form action="">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ente your Email"
              id="email"
            />
          </div>
          <button type="submit">Rs {fee}</button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
