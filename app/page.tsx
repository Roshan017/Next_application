import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
export default function Home() {
  return (
    <section>
      <h1 className="text-center font-bold opacity-85">
        Build. Learn. Compete.
        <br />
        Repeat.
      </h1>
      <p className="text-center mt-8">
        The ultimate hub for every dev event you crave
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {["Hackathon X", "CodeFest 2024", "DevCon Summit"].map((event) => (
            <li className="text-white" key={event}>
              <EventCard title={event} image="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
