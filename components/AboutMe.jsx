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

import cv from '../public/alejoFernandezcv.pdf'
import { motion } from 'framer-motion'

const AboutMe = () => {

  const [theme, setTheme] = useContext(Context)

  

  return (
    <section className={`about-me  relative w-full flex justify-center z-50 ${theme === 'dark' ? 'bg-[#1b1a25]' : 'bg-gray-50'} pt-14`} id='aboutme' >

      <motion.div initial={{y:150}} whileInView={{y:0}} transition={{ duration: 0.5 }} viewport={{once:true}} className={'w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[850px]  '}>
        <h4 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-white'}  text-3xl lg:text-4xl mb-5 font-semibold flex relative `}> About Me <Image width={30} height={15} alt='triangleDesign' src={triangle} className=' max-h-[30px] relative bottom-[-6px] left-[10px]' /></h4>

          <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'}  text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          My name is Daniel Mateu, I am a 20 year old <span className={'text-[#9333EA]'}>Front-end Developer</span>  based in Buenos Aires, Argentina. 
          I have been studying frontend development for a year now, and my objective is to become the best possible version of myself, so there is still a long road to walk.

          I am a very <span className={'text-[#9333EA]'}>disciplined</span> person with a strong personality who loves to put <span className='text-[#9333EA]'>difficult challenges</span> to himself.
          </p>

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