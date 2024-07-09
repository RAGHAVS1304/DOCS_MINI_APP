
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { useTheme } from "../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Foreground() {
  const { theme, toggleTheme } = useTheme();
  const ref = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gnews.io/api/v4/top-headlines", {
          params: {
            country: "us", 
            token: "73ae2d5523f3ac1d45856cc078a8e371",
          },
        });
        console.log(response.data.articles);
        const articles = response.data.articles.slice(0, 6).map((article) => ({
          desc: article.title,
          filesize: `${article.source.name}`,
          close: false,
          tag: {
            isOpen: true,
            tagTitle: "Read More",
            tagColor: "green",
          },
          url: article.url,
        }));
        setData(articles);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-[4] p-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center bg-opacity-80`}
      >
        {theme === "light" ? (
          <>
            <FaSun
              className="text-yellow-500 dark:text-yellow-300 mr-2"
              size={20}
            />
            <span className="hidden md:inline">Light Mode</span>
          </>
        ) : (
          <>
            <span className="hidden md:inline">Dark Mode</span>
            <FaMoon
              className="text-gray-800 dark:text-gray-200 ml-2"
              size={20}
            />
          </>
        )}
      </button>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
