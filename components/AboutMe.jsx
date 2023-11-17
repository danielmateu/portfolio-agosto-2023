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
import { TriangleDesign } from './TriangleDesign'

const AboutMe = () => {

  const [theme, setTheme] = useContext(Context)



  return (
    <section className={`about-me  relative w-full flex justify-center z-50 ${theme === 'dark' ? 'bg-[#1b1a25]' : 'bg-gray-50'} pt-14`} id='aboutme' >

      <motion.div initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[850px]  '}>
        <h4 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-white'}  text-3xl lg:text-4xl mb-5 font-semibold flex relative `}> Sobre mi <TriangleDesign width={30} height={30} alt='triangle design' />
        </h4>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>

          Mi nombre es Daniel Mateu, soy <span className={'text-[#79d2e2]'}>Desarrollador Front End</span> y vivo en Barcelona.

          Me considero una persona muy <span className={'text-[#79d2e2]'}>disciplinada</span> con mucha atención al detalle a la que le encanta ponerse <span className='text-[#79d2e2]'>retos difíciles</span>.

        </p>
        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Antes de la pandemia mi rol era el de <span className={'text-[#79d2e2]'}>coordinador de oficina</span>, en la que dirigía un grupo de 10 compañeros en una compañía multi-nacional de alquiler de coches, pero debido a la situación en la que nos encontramos, decidí dar un giro a mi vida y dedicarme a la programación.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          En el 2020 comencé a estudiar <span className={'text-[#79d2e2]'}>Front End</span> y <span className={'text-[#79d2e2]'}>Diseño UX/UI</span> en el<a href="https://itacademy.barcelonactiva.cat/login/index.php" target='_blank'><span className={'text-[#79d2e2]'}> IT Academy</span></a> de Barcelona Activa, donde aprendí las tecnologías más utilizadas en el mercado, como <span className={'text-[#79d2e2]'}>HTML</span>, <span className={'text-[#79d2e2]'}>CSS</span>, <span className={'text-[#79d2e2]'}>JavaScript</span>, <span className={'text-[#79d2e2]'}>Angular</span>, control de versiones con <span className={'text-[#79d2e2]'}>Git</span> y manejo de bases de datos con <span className={'text-[#79d2e2]'}>MySQL</span>.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Aunque justo al finalizar el curso, decidí dar un paso más aprendiendo <span className={'text-[#79d2e2]'}>React</span> y <span className={'text-[#79d2e2]'}>Node.js</span> por mi cuenta, ya que son las tecnologías que más me llamaban la atención.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          En mi tiempo libre me gusta <span className={'text-[#79d2e2]'}>aprender</span> tecnologías nuevas aplicándolas a mis proyectos personales, <span className={'text-[#79d2e2]'}>leer</span> ,<span className={'text-[#79d2e2]'}> hacer deporte</span> y la <span className={'text-[#79d2e2]'} >música</span>.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}
        >En realidad amo la música, me considero multi-instrumentista, ya que toco la <span className={'text-[#79d2e2]'}>guitarra</span>, el <span className={'text-[#79d2e2]'}>bajo</span>, el <span className={'text-[#79d2e2]'}>piano</span> y la <span className={'text-[#79d2e2]'}>batería</span>.</p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          También me gusta <span className={'text-[#79d2e2]'}>viajar</span>, <span className={'text-[#79d2e2]'}>conocer</span> nuevas culturas y los paseos por la montaña.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Actualmente estoy trabajando en mejorar mis habilidades como <span className={'text-[#79d2e2]'}>Desarrollador Front End</span>, <span className={'text-[#79d2e2]'}>Diseñador UX/UI</span> y <span className={'text-[#79d2e2]'}>Desarrollador Back End</span>.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Por otro lado, estoy abierto a nuevas oportunidades, así que si crees que puedo encajar en tu equipo, no dudes en contactar conmigo.
        </p>

        <MyStack />

        <MyStudies />

        <div className={` mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
          <p className={' font-medium'}>Descarga mi cv  <a href={cv} download={true} className={'text-[#79d2e2] font-semibold'} >aquí!</a> </p>
        </div>

      </motion.div>


      {/* <Image width={400} height={400} src={darkBox} priority={true} alt="boxDesign" className={`w-auto min-h-[500px] ${theme !== 'dark' && 'opacity-30'} bottom-20 right-0 z-0 object-cover  absolute`} /> */}
    </section >
  )
}

export default AboutMe