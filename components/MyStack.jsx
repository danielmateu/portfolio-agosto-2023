'use client'

import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiNodedotjs, SiMysql, SiMui, SiStripe, SiSupabase } from 'react-icons/si'

import { FaBootstrap } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'

import Context from '@/app/context/Context'

import { useContext } from 'react'

const MyStack = () => {

  const [theme, setTheme] = useContext(Context)

  return (
    <>
      {/* MY STACK */}
      <h5 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-100'}  font-medium text-2xl mb-8 mt-20 flex items-end relative `}>Mi Stack tecnológico</h5>

      <div className={' flex gap-7 flex-wrap lg:w-[90%] items-center justify-center'}>
        <div className={'flex flex-col justify-center '}>
          <SiJavascript className={'text-[35px] text-yellow-400  ml-2 mb-1.5 lg:text-[45px]'} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Javascript</span> */}
        </div>
        <div className={'flex flex-col justify-center '}>
          <FaReact className={'text-[35px] text-cyan-500 ml-1 mb-1.5 lg:text-[45px]'} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>React Js</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiNextdotjs className={`text-[35px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}  ml-0.5 mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Next Js</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiNodedotjs className={`text-[35px] ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}  ml-1 mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Node Js</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiMongodb className={`text-[35px] ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}  ml-1 mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>MongoDB</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiMysql className={`text-[35px] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}  ml-1 mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>MySQL</span>
         */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiMui className={'text-[35px] text-blue-600  ml-1 mb-1.5 lg:text-[45px]'} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Material UI</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <SiTailwindcss className={'text-[35px] text-cyan-400  ml-1 mb-1.5 lg:text-[45px]'} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Tailwind</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <FaBootstrap className={'text-[35px] text-purple-600  ml-2 mb-1.5 lg:text-[45px]'} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Bootstrap</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <FaGitAlt className={`text-[35px] text-orange-600  mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm ml-3`}>Git</span> */}
        </div>

        <div className={'flex flex-col justify-center '}>
          <AiOutlineGithub className={`text-[35px] ${theme === 'dark' ? 'text-white ' : 'text-gray-600'}   mb-1.5 lg:text-[45px]`} />
          {/* <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm `}>Github</span> */}
        </div>

        {/* <div className={'flex flex-col justify-center '}>
          <SiSupabase className={`text-[35px] ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}  ml-1 mb-1.5 lg:text-[45px]`} />
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Supabase</span>
        </div> */}
      </div>
    </>
  )
}

export default MyStack