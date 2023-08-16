'use client'

import React, {useContext} from 'react'
import Context from '@/app/context/Context'


const Footer = () => {

  const [theme, setTheme] = useContext(Context)

  return (
    <footer className={`w-full flex flex-col ${theme === 'dark' ? 'bg-[#262737]' : 'bg-gray-200'}   justify-start pt-8 items-center min-h-[12vh]  relative `}>

      <div className={`max-w-[550px] ${theme === 'dark' ? 'text-gray-50' : ' text-[#262737]'} font-medium`}>
        Developed by <a href="https://www.linkedin.com/in/alejo-fernandez-23821b243/" className='hover:text-[#9333EA] '>Daniel Mateu</a>
      </div>
      <div>

      </div>


    </footer>
  )
}

export default Footer