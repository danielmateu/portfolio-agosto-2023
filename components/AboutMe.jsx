'use client'

import '../app/globals.css'

import MyStack from './MyStack'
import MyStudies from './MyStudies'

import Context from '@/app/context/Context'

import { useContext } from 'react'

import cv from '../public/danielmateu2023.pdf'
import { motion } from 'framer-motion'
import { Download } from './Download'

const AboutMe = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  sixthParagraph,
  seventhParagraph,
  mystackTitle,
  description,
  download,
  downloadButton,
}) => {

  const [theme, setTheme] = useContext(Context)

  return (
    <section className={`about-me  relative w-full flex justify-center z-50 ${theme === 'dark' ? 'bg-[#1b1a25]' : 'bg-gray-50'} pt-14`} id='aboutme' >

      <motion.div initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[500px] md:max-w-[700px] z-40 p-4 pt-20 lg:max-w-[850px]  '}>
        <h4 className={`${theme !== 'dark' ? 'text-[#262737]' : 'text-white'}  text-3xl lg:text-4xl mb-5 font-semibold flex relative `}>{title}
        </h4>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {firstParagraph}
        </p>
        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {secondParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {thirdParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {fourthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {fifthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {sixthParagraph}
        </p>

        <p className={`${theme !== 'dark' ? 'text-[#484959]' : 'text-gray-400'} mb-2 text-sm font-semibold lg:w-[90%] lg:text-[15px]`}>
          {seventhParagraph}
        </p>

        <MyStack
          mystackTitle={mystackTitle}
          description={description}
        />

        <MyStudies />

        <Download
          download={download}
          downloadButton={downloadButton}
        />

      </motion.div>

    </section >
  )
}

export default AboutMe