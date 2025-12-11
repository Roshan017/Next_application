import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}
const EventCard = ({ title, image }: Props) => {
  return (
    <Link href={"/"} id="event-card">
      <Image src={image} alt={title} />
      <p className="title">{title}</p>
    </Link>
  );
};

export default EventCard;
