"use client";

import Image from "next/image";
import Link from "next/link";

const EventVenue = ({ venue }: { venue: string }) => {
  const encodedVenue = encodeURIComponent(venue);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedVenue}`;

  return (
    <div className="flex flex-col gap-3">
      <Link
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 cursor-pointer hover:underline"
      >
        <Image src="/venue.svg" alt="Venue" width={22} height={22} />
        <p className="mb-1">{venue}</p>
      </Link>

      {/* Embedded map preview */}
      <iframe
        title="Event venue map"
        className="w-full h-[300px] rounded-lg border"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodedVenue}&output=embed`}
      />
    </div>
  );
};

export default EventVenue;
