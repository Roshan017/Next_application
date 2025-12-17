import Image from "next/image";

const EventDetailitem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string | Date;
}) => {
  const displayLabel =
    typeof label === "string" ? label : label.toLocaleString();

  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt={alt} width={22} height={22} />
      <p className="mb-1">{displayLabel}</p>
    </div>
  );
};

export default EventDetailitem;
