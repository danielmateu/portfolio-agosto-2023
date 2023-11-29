'use client'

import { BsDot } from 'react-icons/bs'
import Context from '@/app/context/Context'
import { useContext } from 'react'


const MyStudies = ({ myStudies }) => {

  const [theme] = useContext(Context)

  const coderHouseCourses = [
    'Full Stack Development with React & Node',
    'Nextjs 13 + MongoDB',
    'UX/UI Design',
    'Backend con Nodejs, Express y MongoDB',
    'Video games development with Unity and C#',
    'Docker',
    'Full Stack with PHP and MySQL',
  ]

  const educacionITCourses = [
    'JS ES6+',
    'Typescript',
    'Angular 12 with MySQL',
    'Interface design with Figma',
    `Git and Github for version control`,
  ]

  const cursus42 = [
    'Shell',
    'C',
    'Vim',
    'Peer learning',
  ]

  

  return (
    <>
      <div className={'w-full'}>
        <h6 className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-2xl font-medium mb-12 mt-20 flex items-end relative `}>{myStudies}</h6>

        <div className={'flex gap-10 flex-wrap'}>

          <div>
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
              Másters Online
            </span>

            <ul className={'border-l-[2px] border-sky-500 mt-5 pl-1.5 flex flex-col gap-2  '}>

              {coderHouseCourses.map((course) => (
                <li key={course} className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> {course} </li>
              ))}

            </ul>
          </div>

          <div>
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
              IT Academy
            </span>
            <ul className={'border-l-[2px] border-sky-500 mt-5 pl-1.5 flex flex-col gap-2 '} >

              {educacionITCourses.map((course) => (

                <li key={course} className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> {course}</li>

              ))}


            </ul>
          </div>

          <div>
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
              42 Barcelona
            </span>
            <ul className={'border-l-[2px] border-sky-500 mt-5 pl-1.5 flex flex-col gap-2 '} >

              {cursus42.map((course) => (

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