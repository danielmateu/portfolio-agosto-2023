'use client'

import { BsDot } from 'react-icons/bs'

import Context from '@/app/context/Context'

import { useContext } from 'react'
import { TriangleDesign } from './TriangleDesign'

const MyStudies = () => {

  const [theme, setTheme] = useContext(Context)


  const coderHouseCourses = [
    'Desarrollo Web Full Stack con React.js y Node.js',
    'Next Js',
    // 'Javascript',
    'UX/UI Design con Figma',
    // 'Librerías Javascript',
    'Tailwind CSS',
    'Librerías React',
    'Librerías Node.js',
    'Backend con Node.js, Express y MongoDB',
    'MongoDB',
    'Docker',
    'React Native',
    'Firebase',
    'PHP',
    'C#',
    'Desarrollo de videojuegos con Unity',
    'Pyhon',
  ]

  const educacionITCourses = [
    'Javascript avanzado',
    'Typescript',
    'Angular',
    'MySQL',
    'Bootstrap',
    'Sass & Less',
    'POO con Javascript',
    'Diseño de interfaces con Figma',
    'Web layout with html & css',
    'Introduction to UX',
    'Web development with html ',
    `Git y Github`,

  ]

  return (
    <>
      <div className={'w-full'}>
        <h6 className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} text-2xl font-medium mb-12 mt-20 flex items-end relative `}>Mis estudios como programador</h6>

        <div className={'w-full max-w-[1000px] flex flex-col gap-10 sm:flex-row md:gap-20 lg:gap-[120px]'}>

          <div>
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
              Másters Online
            </span>

            <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2  '}>

              {coderHouseCourses.map((course) => (
                <li key={course} className={`flex whitespace-nowrap items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-sm  md:text-[15px]`}><BsDot className={'text-lg'} /> {course} </li>
              ))}


            </ul>
          </div>

          <div>
            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg ml-2 `}>
              IT Academy
            </span>
            <ul className={'border-l-[2px] border-[#9333EA] mt-5 pl-1.5 flex flex-col gap-2 '} >

              {educacionITCourses.map((course) => (

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