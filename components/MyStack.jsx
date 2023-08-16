'use client'

import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiFirebase } from 'react-icons/si'

import { AiFillHtml5 } from 'react-icons/ai'

import Context from '@/app/context/Context'

import { useContext } from 'react'

const MyStack = () => {

  const [theme, setTheme] = useContext(Context)

  return (
    <>
      {/* MY STACK */}
      <div className={' flex gap-7 flex-wrap lg:w-[90%]'}>


        <div className={'flex flex-col justify-center '}>
          <FaReact className={'text-[35px] text-cyan-500 ml-1 mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>React Js</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiNextdotjs className={`text-[35px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}  ml-0.5 mb-1.5 lg:text-[45px]`} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Next Js</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiJavascript className={'text-[35px] text-yellow-400  ml-2 mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Javascript</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <FaSass className={'text-[35px] text-pink-400   mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm ml-1`}>Scss</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiFirebase className={'text-[35px] text-orange-500  ml-1 mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Firebase</span>
        </div>
        <div className={'flex flex-col justify-center '}>
          <SiTailwindcss className={'text-[35px] text-cyan-400  ml-1 mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Tailwind</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <FaBootstrap className={'text-[35px] text-purple-600  ml-2 mb-1.5 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Bootstrap</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <FaGitAlt className={`text-[35px] text-orange-600  mb-1.5 lg:text-[45px]`} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm ml-3`}>Git</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <AiOutlineGithub className={`text-[35px] ${theme === 'dark' ? 'text-white ' : 'text-gray-600'}   mb-1.5 lg:text-[45px]`} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm `}>Github</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <IoLogoCss3 className={'text-[35px] text-blue-700  mb-1 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} ml-2.5`}>Css</span>
        </div>

        <div className={'flex flex-col justify-center '}>
          <AiFillHtml5 className={'text-[35px] text-orange-600  ml-1 mb-1 lg:text-[45px]'} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm ml-2.5`}>Html</span>
        </div>


      </div>
    </>
  )
}

export default MyStack