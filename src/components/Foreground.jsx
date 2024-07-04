
import React, { useRef } from 'react';
import Cards from './Cards';
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Foreground() {
  const { theme, toggleTheme } = useTheme();
  const ref = useRef(null);
  const data = [
    {
      desc: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "sky" },
    },
    {
      desc: "Well done is better than well said. -Benjamin Franklin.",
      filesize: "1.4mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      filesize: "2.4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "sky" },
    },
    {
      desc: "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
      filesize: "1.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    }
  ];

  return (
    <div className='relative'>
      <button onClick={toggleTheme} className={`fixed top-4 right-4 z-[4] p-2 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center bg-opacity-80`}>
        {theme === 'light' ? (
          <>
            <FaSun className="text-yellow-500 dark:text-yellow-300 mr-2" size={20} />
            <span className="hidden md:inline">Light Mode</span>
          </>
        ) : (
          <>
            <span className="hidden md:inline">Dark Mode</span>
            <FaMoon className="text-gray-800 dark:text-gray-200 ml-2" size={20} />
          </>
        )}
      </button>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Cards key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
