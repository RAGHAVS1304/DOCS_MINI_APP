import React, { useRef } from "react";
import { useTheme } from "../ThemeContext";
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  const { theme } = useTheme();
  const cardRef = useRef(null);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    const url = data.url;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className={`relative flex-shrink-0 w-60 h-72 rounded-[40px] px-8 py-10 overflow-hidden ${
        theme === "light" ? "bg-slate-400 text-black" : "bg-gray-700 text-white"
      }`}
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span
            className={`w-7 h-7 ${
              theme === "light" ? "bg-slate-300" : "bg-gray-500"
            } rounded-full flex items-center justify-center`}
          >
            {data.close ? (
              <IoIosClose />
            ) : (
              <GoDownload
                size=".7em"
                color={theme === "light" ? "#000" : "#FFF"}
              />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "sky" ? "bg-sky-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleReadMoreClick}
              >
                {data.tag.tagTitle}
              </a>
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
