"use client";
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <div className="flex justify-center mt-15 ">
      <button id="explore-btn" className="group">
        <a
          href="#events"
          className="text-white font-poppins flex items-center gap-4 "
        >
          Explore Events
          <Image
            src={"/arrow-down.svg"}
            alt="arrow down"
            className="transition-transform group-hover:animate-bounce text-white"
            width={35}
            height={35}
          />
        </a>
      </button>
    </div>
  );
};

export default ExploreBtn;
