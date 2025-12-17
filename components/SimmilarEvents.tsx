"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Events {
  image: string;
  id: string;
  name: string;
}

const SimmilarEvents = ({ id }: { id: string }) => {
  const [events, setEvents] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        const data: Events[] = await res.json();
        const filtered = data.filter((event) => event.id !== id);
        const shuffled = [...filtered].sort(() => 0.5 - Math.random());
        setEvents(shuffled.slice(0, 3));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link href={`/event/${event.id}`} key={event.id}>
          <div className="rounded-lg border border-white/10 overflow-hidden ">
            <div className="relative w-full h-50">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-sm font-medium">{event.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimmilarEvents;
