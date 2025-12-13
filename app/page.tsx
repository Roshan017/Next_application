import ExploreBtn from "@/components/ExploreBtn";
import EventGrid from "@/components/EventGrid";
export default function Home() {
  return (
    <section>
      <h1 className="text-center font-bold opacity-85">
        Build. Learn. Compete.
        <br />
        Repeat.
      </h1>
      <p className="text-center mt-8 font-poppins">
        The ultimate hub for every dev event you crave
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <EventGrid />
      </div>
    </section>
  );
}
