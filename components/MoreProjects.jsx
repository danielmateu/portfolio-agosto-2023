'use client'
import React, { useState } from 'react'
import Context from '@/app/context/Context'
import { useContext } from 'react'
import data from '@/data.json'
import Image from 'next/image'
import {SiNextdotjs} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import { RxRocket } from 'react-icons/rx'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import triangle from '../public/assets/triangle.webp'

const MoreProjects = () => {

  const [theme, setTheme] = useContext(Context)

  const [length, setLength ] = useState(210)

  
  

  return (
    <section className={` flex flex-col items-center  min-h-[50vh]  w-full ${theme === 'dark' ? 'bg-[#1F1D2B]': 'bg-gray-100'} relative z-100`}>

      <div className='w-full max-w-[1000px] flex flex-col justify-center items-center '>

       <div className='w-full max-w-[350px] md:max-w-[800px] md:pl-3  lg:max-w-[1000px]  '>

        <h2 className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} text-3xl self-start m-auto mt-[100px] mb-[60px] ml-5  lg:ml-2   flex`}>More projects <Image width={30} height={15} alt='triangleDesign' src={triangle} className={' max-h-[30px] relative bottom-[-6px] left-[10px]'} /></h2>
        </div> 
      </div>

      <div className='w-full lg:max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 pb-20 place-items-center md:max-w-[750px] md:place-items-start'>


        {data.slice(5,8).map((project)=>(
          
          <div key={project.title} className='max-w-[350px] rounded-md px-3 flex flex-col'>

            <Link href={project.urlDeploy} target='_blank'>
              <Image width={300} height={300} alt={`Image of ${project.name} project`} src={project.img} className='w-auto h-auto rounded-md scale-100 transition-all duration-200 hover:scale-105' />

            </Link>


            <div className='w-full flex justify-between items-center pt-2'>
              <h6 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-lg font-semibold py-2`}>{project.title}</h6>

              <div className='flex gap-2'>
              <a href={project.urlRepo} target='_blank' className={'flex flex-col text-xs text-[#9333EA]'}><AiOutlineGithub  className={'text-[24px] cursor-pointer  hover:opacity-80'}/></a>
              <a href={project.urlDeploy} target='_blank' > <RxRocket className={'text-[24px]  text-[#9333EA] cursor-pointer  hover:opacity-80 '} /></a>
              </div>  

            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xs md:text-sm`}>{project.description.length > length ? `${project.description.slice(0,length)}...` : project.description} </p>
            {project.description.length > length ? <button onClick={()=> setLength(381)} className='text-purple-500  pt-2  rounded-md font-semibold self-start text-sm md:text-base'>Show more</button> : null}
            {project.description.length === length  ? <button onClick={()=> setLength(220) } className='text-purple-500  pt-2   rounded-md font-semibold self-start text-sm md:text-base'>Show less</button> : null} 
            
            
            <div className='flex justify-between items-center w-full pt-4 '>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm `}>Techs used: </span>

              <div className='flex gap-2'>
                <SiNextdotjs className={'text-[27px] text-gray-500'} />

                <SiTailwindcss className={'text-[27px] text-cyan-400'} />
              </div>
            </div>
          </div>
        ))}

        

      </div>

    </section>
  )
}

export default MoreProjects