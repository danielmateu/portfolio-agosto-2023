'use client'
import React from 'react'
import {BsDot} from 'react-icons/bs'
import Image from 'next/image'
import triangle from '../public/assets/triangle.webp'
import Context from '@/app/context/Context'

import { useContext } from 'react'

const MyStudies = () => {

  const [theme, setTheme] = useContext(Context)


   const coderHouseCourses = [
    'Front end Web Developer with React',
    'React Js',
    'Javascript',
    'Web development with HTML',
   ]

   const educacionITCourses = [
    'Javascript Advanced Developer',
    'Bootstrap',
    'Sass & Less',
    'Object Paradigm introduction',
    'Javascript from Scratch',
    'Web layout with html & css',
    'Introduction to UX',
    'Web development with html ',
    
   ]

  return (
    <>
    <div className={'w-full'}>
            <h6 className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-2xl font-medium mb-12 mt-20 flex items-end relative `}>My Studies <Image width={25} height={10} alt='triangleDesign' src={triangle} className={' relative  bottom-[5px] left-[10px]'} /></h6>

            <div className={'w-full max-w-[1000px] flex flex-col gap-10 sm:flex-row md:gap-20 lg:gap-[120px]'}>

              <div>
                  <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
                    CoderHouse
                  </span>

                  <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2  '}>

                    {coderHouseCourses.map((course)=>(
                       <li key={course} className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> {course} </li> 
                    ))}
                    
                    
                  </ul>          
              </div>

              <div>
                  <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
                    Educacion IT
                  </span>
                  <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2 '} >

                      {educacionITCourses.map((course)=>(

                        <li key={course} className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> {course}</li>

                      ))}

                    
                  </ul>   
              </div>

            </div>
          </div>
    </>
  )
}

export default MyStudies