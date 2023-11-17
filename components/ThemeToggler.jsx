'use client'

import React, { useState, useEffect } from 'react';
import Context from '@/app/context/Context';
import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(Context);

  const toggleTheme = () => {
    const localTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(localTheme);
    localStorage.setItem('theme', localTheme);
  };

  
  useEffect(() => {

    if(typeof window !== 'undefined'){
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        setTheme(localTheme);
      }
    }
  }, [setTheme]);

  return (
    <div className={`relative h-6 w-12 text-white flex flex-col`}>
      <label htmlFor="AcceptConditions" className="absolute h-6 w-12 cursor-pointer">
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" onClick={toggleTheme} />
        <span className={`absolute inset-0 w-full rounded-full bg-gray-500 transition ${theme === 'light' && 'bg-sky-400'}`}></span>
        <span className={`absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full transition-all ${theme === 'light' && 'start-6'}`}>
          {theme === 'dark' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggler;
