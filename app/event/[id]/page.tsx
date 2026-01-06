import { notFound } from "next/navigation";
import Image from "next/image";
import EventDetailitem from "@/components/EventDetailitem";
import EventVenue from "@/components/EventVenue";
import SimmilarEvents from "@/components/SimmilarEvents";
import path from "path";
import BookEvent from "@/components/BookEvent";

interface EventProps {
  params: Promise<{ id: string }>;
}
const toTitleCase = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap ">
    {tags.map((tag) => (
      <div className="pill" key={tag}>
        {tag && toTitleCase(tag)}
      </div>
    ))}
  </div>
);

const EventPage = async ({ params }: EventProps) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`
  );
  if (!res) return notFound();

  const event = await res.json();
  const bookings = Math.floor(Math.random() * 100) + 1;

  return (
    <section id="event">
      <div className="header">
        <h1>{event.name}</h1>
        <p className="font-extralight text-white/55">{event.organiser}</p>
        <p className="font-poppins">{event.description}</p>
      </div>

      <div className="details">
        <div className="content">
          <Image
            src={event.image}
            alt="Event Banner"
            width={800}
            height={800}
            className="banner"
          />

          <section className=" flex-col-gap-2">
            <h2 className="text-white">Overview</h2>
            <p className="font-poppins">{event.overview}</p>
          </section>

          <section className="flex-col-gap-2">
            <h2>Event Deatils</h2>
            <EventDetailitem icon="/mode.svg" alt="Mode" label={event.mode} />

            <EventDetailitem
              icon="/calendar.svg"
              alt="Date"
              label={new Date(event.dateTime).toLocaleDateString()}
            />
            <EventDetailitem
              icon="/clock.svg"
              alt="Time"
              label={new Date(event.dateTime).toLocaleTimeString()}
            />
            <EventDetailitem
              icon="/pin.svg"
              alt="Location"
              label={event.location}
            />

            <EventVenue venue={event.venue} />
          </section>

          <h2>About The Organiser</h2>
          <p>{event.abt_the_organiser}</p>
          <EventTags tags={event.tags} />

          <h2>Similar Events</h2>
          <SimmilarEvents id={id} />
        </div>

        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p>Join {bookings} people who have already booked their spot</p>
            ) : (
              <p>Be the first one to book your spot</p>
            )}
            <BookEvent Event={event} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default EventPage;
