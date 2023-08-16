'use client'
import React from 'react'

import '../app/globals.css'
import darkBox from '../public/assets/darkBoxDesign.webp'
import Image from 'next/image'


import triangle from '../public/assets/triangle.webp'

import MyStack from './MyStack'
import MyStudies from './MyStudies'

import Context from '@/app/context/Context'

import { useContext } from 'react'

import cv from '../public/danielmateu2023.pdf'
import { motion } from 'framer-motion'

const AboutMe = () => {

  const [theme, setTheme] = useContext(Context)



  return (
    <section className={`about-me  relative w-full flex justify-center z-50 ${theme === 'dark' ? 'bg-[#1b1a25]' : 'bg-gray-50'} pt-14`} id='aboutme' >

      <motion.div initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[850px]  '}>
        <h4 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-white'}  text-3xl lg:text-4xl mb-5 font-semibold flex relative `}> Sobre mi <Image width={30} height={15} alt='triangleDesign' src={triangle} className=' max-h-[30px] relative bottom-[-6px] left-[10px]' /></h4>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {/* My name is Daniel Mateu, I am a 20 year old <span className={'text-[#9333EA]'}>Front-end Developer</span>  based in Buenos Aires, Argentina.
          I have been studying frontend development for a year now, and my objective is to become the best possible version of myself, so there is still a long road to walk.

          I am a very <span className={'text-[#9333EA]'}>disciplined</span> person with a strong personality who loves to put <span className='text-[#9333EA]'>difficult challenges</span> to himself. */}

          Mi nombre es Daniel Mateu, soy <span className={'text-[#9333EA]'}>Desarrollador Front End</span> y vivo en Barcelona.

          Soy una persona muy <span className={'text-[#9333EA]'}>disciplinada</span> con mucha atención al detalle a la que le encanta ponerse <span className='text-[#9333EA]'>retos difíciles</span>.

        </p>
        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Antes de la pandemia mi rol era el de <span className={'text-[#9333EA]'}>coordinador de oficina</span>, en la que dirigía un grupo de 10 compañeros, pero debido a la situación en la que nos encontramos, decidí dar un giro a mi vida y dedicarme a lo que realmente me apasiona, la programación.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          En el 2020 comencé a estudiar <span className={'text-[#9333EA]'}>Front End</span> y <span className={'text-[#9333EA]'}>Diseño UX/UI</span> en el<a href="https://itacademy.barcelonactiva.cat/login/index.php" target='_blank'><span className={'text-[#9333EA]'}>IT Academy</span></a> de Barcelona Activa, donde aprendí las tecnologías más utilizadas en el mercado, como <span className={'text-[#9333EA]'}>HTML</span>, <span className={'text-[#9333EA]'}>CSS</span>, <span className={'text-[#9333EA]'}>JavaScript</span>, <span className={'text-[#9333EA]'}>Angular</span>...
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Aunque justo al finalizar el curso, decidí dar un paso más y comenzar a estudiar <span className={'text-[#9333EA]'}>React</span> y <span className={'text-[#9333EA]'}>Node.js</span> por mi cuenta, ya que son las tecnologías que más me llamaban la atención.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>

          En mi tiempo libre me gusta <span className={'text-[#9333EA]'}>aprender</span> cosas nuevas, <span className={'text-[#9333EA]'}>leer</span> ,<span className={'text-[#9333EA]'}>hacer deporte</span> y la <span className={'text-[#9333EA]'} >música</span>. También me gusta <span className={'text-[#9333EA]'}>viajar</span>, <span className={'text-[#9333EA]'}>conocer</span> nuevas culturas y los paseos por la montaña.
        </p>


        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Actualmente estoy trabajando en mejorar mis habilidades como <span className={'text-[#9333EA]'}>Desarrollador Front End</span>, <span className={'text-[#9333EA]'}>Diseñador UX/UI</span> y <span className={'text-[#9333EA]'}>Desarrollador Back End</span>.
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Estoy abierto a nuevas oportunidades, así que si crees que puedo encajar en tu equipo, no dudes en contactar conmigo.
        </p>

        {/* <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'}  text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          Actualmente estoy cursando el <span className={'text-[#9333EA]'}>Bootcamp de Full Stack Web Development</span> en <span className={'text-[#9333EA]'}>Ironhack</span>, en el que estoy aprendiendo las tecnologías más demandadas del mercado, como <span className={'text-[#9333EA]'}>React</span>, <span className={'text-[#9333EA]'}>Node.js</span> y <span className={'text-[#9333EA]'}>MongoDB</span>.
        </p> */}

        <h5 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-100'}  font-medium text-2xl mb-8 mt-20 flex items-end relative `}>My Stack <Image width={25} height={10} alt='triangleDesign' src={triangle} className=' relative  bottom-[5px] left-[10px]' /> </h5>

        <MyStack />

        <MyStudies />

        <div className={` mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
          <p className={' font-medium'}>Download my cv  <a href={cv} download={true} className={'text-[#9333EA] font-semibold'} >here!</a> </p>
        </div>

      </motion.div>


      <Image width={400} height={400} src={darkBox} priority={true} alt="boxDesign" className={`w-auto min-h-[500px] ${theme !== 'dark' && 'opacity-30'} bottom-20 right-0 z-0 object-cover  absolute`} />
    </section>
  )
}

export default AboutMe