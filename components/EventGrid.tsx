"use client";
import React, { useState } from "react";
import EventCard from "./EventCard";
import { useEffect } from "react";
import Loader from "./Loader";

interface Events {
  image: string;
  id: string;
  dateTime: Date;
  location: string;
  name: string;
  description: string;
  fee?: number;
}

const EventGrid = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("api/events");
        const data = await res.json();
        setEvents(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchEvents();
  }, []);

  //console.log(events);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="events list-none">
          {events.map((event) => (
            <li className="text-white" key={event.id}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventGrid;
