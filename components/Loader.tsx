import React from "react";

const Loader = () => {
  return (
    <div className="flex  justify-center min-h-screen">
      <div className="relative">
        <div className="relative w-32 h-32">
          {/* Outer ring */}
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-green-100/10 border-r-[#1fa97a] border-b-[#1fa97a] animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Inner ring */}
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-green-100/10 border-t-[#1fa97a] animate-spin"
            style={{
              animationDuration: "2s",
              animationDirection: "reverse",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
