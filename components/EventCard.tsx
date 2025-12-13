import Link from "next/link";
import Image from "next/image";

interface Props {
  image: string;
  id: string;
  dateTime: Date;
  location: string;
  name: string;
  description: string;
  fee?: number;
}
const EventCard = ({
  id,
  dateTime,
  image,
  location,
  name,
  description,
  fee,
}: Props) => {
  const date = new Date(dateTime);
  return (
    <Link href={`/events/${id}`} id="event-card">
      <div className="relative w-full h-80 overflow-hidden rounded-xl">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-row gap-2">
        <Image src={"/pin.svg"} alt="location" width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{name}</p>
      <div className="datetime">
        <Image src={"/calendar.svg"} alt="calender" width={14} height={14} />
        <p>{date.toLocaleDateString()}</p>
        <Image src={"/clock.svg"} alt="clock" width={14} height={14} />
        <p>{date.toLocaleTimeString()}</p>
        <p className="ml-2">{fee === 0 ? "Free" : fee + "Rs"}</p>
      </div>
    </Link>
  );
};

export default EventCard;
