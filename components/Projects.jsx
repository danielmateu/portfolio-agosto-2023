'use client'

import React from 'react'
import lightBoxDesign from '../public/assets/lightBoxDesign.webp'
import lightBoxDesign2 from '../public/assets/lightBoxDesign2.webp'
import Image from 'next/image'

import ProjectCardReverse from './ProjectCardReverse'
import ProjectCard from './ProjectCard'

import { motion } from 'framer-motion'
import Context from '@/app/context/Context'

import { useContext } from 'react'
import { data } from '@/data.js'
import { TriangleDesign } from './TriangleDesign'


const Projects = () => {

  const [theme] = useContext(Context)

  return (

    <section className={`flex flex-col items-center z-50  w-full ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-100'} relative z-100`} id='projects' >

      <div className={'bg-[#79d2e2] left-[-100px] top-[50%] blur-[80px] h-[120px] w-[120px] md:h-[150px] md:w-[150px] md:blur-[100px] lg:h-[200px] lg:w-[200px] lg:blur-[130px] absolute xl:h-[300px] xl:w-[250px] xl:blur-[200px]'}></div>

      <div className={'w-full max-w-[1200px] flex flex-col justify-center items-center z-10'}>

        <div className={'w-full max-w-[350px] md:max-w-[800px] md:pl-3  lg:max-w-[900px]  '}>

          <h2 className={`${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} text-3xl text-start m-auto mt-[100px] mb-[60px] ml-3 lg:text-[40px]  flex`}>Mis proyectos <TriangleDesign width={30} height={30} alt='triangle design' /></h2>
        </div>

        <div className={'w-[95%] max-w-[1000px] flex flex-col  gap-20 items-center justify-center '}>

          {data.slice(0, 4).map((project) => (

            project.reverse ? (
              <ProjectCardReverse key={project.title} title={project.title} description={project.description} img={project.img} urlDeploy={project.urlDeploy} urlRepo={project.urlRepo} sliderImages={project.sliderImages} />

            )

              :
              (

                <ProjectCard key={project.title} title={project.title} description={project.description} img={project.img} urlDeploy={project.urlDeploy} urlRepo={project.urlRepo} sliderImages={project.sliderImages} />
              )
          ))}

          <Image width={500} height={250} alt='rectangle design' src={lightBoxDesign2} className={` w-[30%]  ${theme !== 'dark' ? 'opacity-30' : 'opacity-80'} absolute right-0 top-[40%]   z-0   `} />
          <Image width={500} height={250} alt='rectangle design' src={lightBoxDesign} className={` w-[22%] ${theme !== 'dark' ? 'opacity-30' : 'opacity-80'} absolute left-0 bottom-0   z-0   `} />
        </div>

      </div>
      <motion.div className='mb-20 mt-20' initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>

        <a href="#contact" className={` text-base border-[1px] font-regular border-[#79d2e2] py-[8px] px-7 rounded-[5px] ${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-all duration-200 hover:bg-[#79d2e2] `}>Contacta conmigo!</a>
      </motion.div>
    </section>
  )
}

export default Projects