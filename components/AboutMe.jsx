'use client'

import '../app/globals.css'
import darkBox from '../public/assets/darkBoxDesign.webp'
import Image from 'next/image'

import MyStack from './MyStack'
import MyStudies from './MyStudies'

import Context from '@/app/context/Context'

import { useContext } from 'react'

import cv from '../public/danielmateu2023.pdf'
import { motion } from 'framer-motion'


const AboutMe = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  sixthParagraph,
  seventhParagraph,
}) => {

  const [theme, setTheme] = useContext(Context)

  return (
    <section className={`about-me  relative w-full flex justify-center z-50 ${theme === 'dark' ? 'bg-[#1b1a25]' : 'bg-gray-50'} pt-14`} id='aboutme' >

      <motion.div initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[850px]  '}>
        <h4 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-white'}  text-3xl lg:text-4xl mb-5 font-semibold flex relative `}>{title}
        </h4>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* Mi nombre es Daniel Mateu, soy <span className={'font-bold'}>Desarrollador Front End</span> y vivo en Barcelona.<br />
          Me considero una persona muy disciplinada con mucha atención al detalle a la que le encanta ponerse <span className='font-bold'>retos difíciles</span>. */}
          {firstParagraph}
        </p>
        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* Antes de la pandemia mi rol era el de coordinador de oficina, en la que dirigía un grupo de 10 compañeros en una compañía multi-nacional de alquiler de coches, pero debido a la situación en la que nos encontramos, decidí dar un giro a mi vida y dedicarme a la programación. */}
          {secondParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* En el 2020 empecé a estudiar <span className={'font-bold'}>Front End</span> y <span className={'font-bold'}>Diseño UX/UI</span> en el<a href="https://itacademy.barcelonactiva.cat/login/index.php" target='_blank'><span className={'text-sky-500'}> IT Academy</span></a> de Barcelona Activa, donde aprendí las tecnologías más utilizadas en el mercado, como <span className={'font-bold'}>JavaScript</span>, <span className={'font-bold'}>Angular</span>, control de versiones con <span className={'font-bold'}>Git</span> y manejo de bases de datos con <span className={'font-bold'}>MySQL</span>. */}
          {thirdParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* Justo al finalizar el curso, decidí dar un paso más aprendiendo <span className={'font-bold'}>React</span> y <span className={'font-bold'}>Node.js</span> por mi cuenta, ya que son las tecnologías que más me llamaban la atención. */}
          {fourthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* En mi tiempo libre me gusta aprender tecnologías nuevas aplicándolas a mis proyectos personales, leer, hacer deporte y la música. */}
          {fifthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* Actualmente estoy trabajando en mejorar mis habilidades como desarrollador <span className={'font-bold'}>Front End</span>,  <span className={'font-bold'}>Back End</span> y <span className={'font-bold'}>Diseñador UX/UI</span>. */}
          {sixthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* Por otro lado, estoy abierto a nuevas oportunidades, así que si crees que puedo encajar en tu equipo, no dudes en contactar conmigo. */}
          {seventhParagraph}
        </p>

        <MyStack />

        <MyStudies />

        <div className={`mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
          <p className={'font-medium'}>Descarga mi cv  <a href={cv} download={true} className={'text-sky-500 font-semibold hover:underline'} >aquí!</a> </p>
        </div>

      </motion.div>

    </section >
  )
}

export default AboutMe