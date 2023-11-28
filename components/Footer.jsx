'use client'

import React, { useContext } from 'react'
import Context from '@/app/context/Context'


const Footer = ({title, and}) => {

  const [theme, setTheme] = useContext(Context)

  return (
    <footer className={`w-full flex flex-col ${theme === 'dark' ? 'bg-[#262737]' : 'bg-gray-200'}   justify-start pt-8 items-center min-h-[12vh]  relative `}>
      <div className={`max-w-[550px] ${theme === 'dark' ? 'text-gray-50' : ' text-[#262737]'} font-medium`}>
        {title} <a href="https://nextjs.org/" target='_blank' className='hover:text-sky-500 transition-colors'>Next.js</a> {and} <a href="https://tailwindcss.com/" target='_blank' className='hover:text-sky-500 transition-colors'>Tailwind CSS</a>
      </div>
      {/* Copyright y año dinamico */}
      <div className={`text-[10px] ${theme === 'dark' ? 'text-gray-50' : ' text-[#262737]'} font-medium`}>
        © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/daniel-mateu-pardo/" className='hover:text-sky-500 transition'>Daniel Mateu Pardo</a>
      </div>

    </footer>
  )
}

export default Footer