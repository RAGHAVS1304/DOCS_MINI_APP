import React from "react";
import { useTheme } from "../ThemeContext";

const Background = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed z-[2] w-full h-screen ${
        theme === "light"
          ? "bg-white transition-colors duration-500"
          : "bg-gray-900 transition-colors duration-500"
      }`}
    >
      <div
        className={`absolute top-[5%] w-full py-10 flex justify-center ${
          theme === "light" ? "text-zinc-600" : "text-zinc-300"
        } text-medium font-semibold`}
      >
        Top Stories
      </div>
      <h1
        className={`absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold ${
          theme === "light" ? "text-zinc-900" : "text-white"
        }`}
      >
        newsBEAT
      </h1>
    </div>
  );
};

export default Background;
