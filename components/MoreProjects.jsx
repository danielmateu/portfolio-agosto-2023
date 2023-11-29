'use client'
import { useState } from 'react'
import Context from '@/app/context/Context'
import { useContext } from 'react'

import Image from 'next/image'
import { SiGraphql, SiNextdotjs, SiTailwindcss, SiJavascript, SiReact, SiTypescript, SiMongodb } from 'react-icons/si'

import { RxRocket } from 'react-icons/rx'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

import { data } from '@/data'
import { BsBootstrap } from 'react-icons/bs'

const MoreProjects = ({title, description, technologies}) => {

  const [theme, setTheme] = useContext(Context)

  const [length, setLength] = useState(210)

  return (
    <section className={` flex flex-col items-center  min-h-[50vh]  w-full ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-100'} relative z-100`}>

      <div className='w-full max-w-[1000px] flex flex-col justify-center items-center '>

        <div className='w-full max-w-[350px] md:max-w-[800px] md:pl-3  lg:max-w-[1000px]  '>

          <h2 className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} text-3xl self-start m-auto mt-[100px] ml-5  lg:ml-2   flex`}>{title}
          </h2>
          <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-lg py-2 mb-[60px]`}>{description} <a href="https://github.com/danielmateu" className='hover:underline hover:text-sky-500' target='_blank'>Github.</a></p>
        </div>
      </div>

      <div className='w-full lg:max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 pb-20 place-items-center md:max-w-[750px] md:place-items-start'>


        {data.slice(4, 10).map((project) => (

          <div key={project.title} className='max-w-[350px] rounded-md px-3 flex flex-col'>

            <Link href={project.urlDeploy} target='_blank'>
              <Image width={300} height={300} alt={`Image of ${project.name} project`} src={project.img} className='w-auto h-auto rounded-md scale-100 transition-all duration-200 hover:scale-105' />

            </Link>


            <div className='w-full flex justify-between items-center pt-2'>
              <h6 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-lg font-semibold py-2`}>{project.title}</h6>

              <div className='flex gap-2'>
                <a href={project.urlRepo} target='_blank' className={'flex flex-col text-xs text-sky-500'}><AiOutlineGithub className={'text-[24px] cursor-pointer  hover:opacity-80'} /></a>
                <a href={project.urlDeploy} target='_blank' > <RxRocket className={'text-[24px]  text-sky-500 cursor-pointer  hover:opacity-80 '} /></a>
              </div>

            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xs md:text-sm`}>{project.description.length > length ? `${project.description.slice(0, length)}...` : project.description} </p>
            {project.description.length > length ? <button onClick={() => setLength(381)} className='text-purple-500  pt-2  rounded-md font-semibold self-start text-sm md:text-base'>Show more</button> : null}
            {project.description.length === length ? <button onClick={() => setLength(220)} className='text-purple-500  pt-2   rounded-md font-semibold self-start text-sm md:text-base'>Show less</button> : null}


            <div className='flex justify-between items-center w-full pt-4 '>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm `}>{technologies}: </span>

              {project.title === 'CRM de Clientes' &&
                <div className='flex gap-2'>
                  <SiNextdotjs className={'text-[27px] text-gray-500'} />
                  <SiJavascript className={'text-[27px] text-yellow-400'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                  <SiGraphql className={'text-[27px] text-pink-600'} />
                </div>
              }
              {
                project.title === 'Tic Tac Toe' &&

                <div className='flex gap-2'>
                  <SiReact className={'text-[27px] text-blue-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                </div>
              }

              {
                project.title === 'Control de Gastos' &&
                <div className='flex gap-2'>
                  <SiReact className={'text-[27px] text-blue-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                </div>
              }

              {
                project.title === 'Crypto App' &&
                <div className='flex gap-2'>
                  <SiJavascript className={'text-[27px] text-yellow-400'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                </div>
              }
              {
                project.title === 'Guitar LA' &&
                <div className='flex gap-2'>
                  <SiReact className={'text-[27px] text-blue-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                </div>
              }

              {
                project.title === 'Mern Calendar' &&
                <div className='flex gap-2'>
                  <SiReact className={'text-[27px] text-blue-500'} />
                  <BsBootstrap className={'text-[27px] text-purple-600'} />
                </div>
              }

              {
                project.title === 'My Places' &&
                <div className='flex gap-2'>
                  <SiReact className={'text-[27px] text-blue-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                  <SiMongodb className={'text-[27px] text-green-500'} />
                </div>
              }

              {
                project.title === 'Notion Clone' &&
                <div className='flex gap-2'>
                  <SiNextdotjs className={'text-[27px] text-gray-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                  <SiTypescript className={'text-[27px] text-blue-500'} />
                </div>
              }

              {
                project.title === 'Four Frame' &&
                <div className='flex gap-2'>
                  <SiNextdotjs className={'text-[27px] text-gray-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                  <SiTypescript className={'text-[27px] text-blue-500'} />
                </div>
              }

              {
                project.title === 'Solid Camper Store' &&
                <div className='flex gap-2'>
                  <SiNextdotjs className={'text-[27px] text-gray-500'} />
                  <SiTailwindcss className={'text-[27px] text-cyan-400'} />
                  <SiTypescript className={'text-[27px] text-blue-500'} />
                  <SiMongodb className={'text-[27px] text-green-500'} />
                </div>
              }

            </div>
          </div>
        ))}



      </div>

    </section>
  )
}

export default MoreProjects