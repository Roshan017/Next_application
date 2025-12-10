import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="flex gap-4 items-center">
          <Image src={"/Logo.png"} alt="logo" width={50} height={50} />
          <p className="font-martian-mono font-bold">Envolv</p>
        </Link>

        <ul className="text-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>Create</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
