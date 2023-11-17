'use client'

import Image from 'next/image'

import { ChakraProvider } from '@chakra-ui/react'

import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'

import avatar from '../public/assets/fullbodyAvatar.webp'

import Context from '@/app/context/Context'

import { useContext } from 'react'

import { motion } from 'framer-motion'
import { SiGmail } from 'react-icons/si'



const initValues = { name: "", email: "", msg: "" }
const initState = { values: initValues }


function Contact() {

  const [theme, setTheme] = useContext(Context)

  return (
    <ChakraProvider>
      <section className={` pb-14 z-50 flex justify-center relative w-full ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-100'}  pt-20`} id='contact'>
        <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[850px] relative flex flex-col items-center justify-between sm:flex-row'}>

          <div className={'w-full max-w-[400px] flex flex-col justify-center items-center  '}>

            <h6 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-semibold flex relative ml-5 mr-5`}>
              Quieres contactar?</h6>

            <a href="mailto:danielmateu86@gmail.com" target='_blank'
              className={'mt-10 self-center'}
            >
              <SiGmail className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-sky-500 transition-all duration-200 cursor-pointer`} />
            </a>

            <h6 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-xl font-medium text-left self-left mt-10 self-center`}>Redes sociales: </h6>
            <div className={'flex gap-5 mt-5 mb-10 self-center'}>
              <a href="https://www.linkedin.com/in/daniel-mateu-pardo/" target='_blank'>
                <AiFillLinkedin className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-sky-500 transition-all duration-200 cursor-pointer`} />
              </a>

              <a href="https://www.instagram.com/danimateu86/" target='_blank'>
                <AiOutlineInstagram className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-sky-500 transition-all duration-200 cursor-pointer`} />
              </a>

              <a href="https://github.com/danielmateu" target='_blank'>
                <AiFillGithub className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-sky-500 transition-all duration-200 cursor-pointer`} />
              </a>

            </div>

          </div>

          <div className={'self-center mb-20'}>
            <Image width={1900} height={1500} src={avatar} className={'h-auto w-auto min-h-[380px] max-w-[250px] md:min-h-[500px] md:mr-10 object-cover'} alt='Full body avatar' />
          </div>
        </motion.div>



      </section>
    </ChakraProvider>
  )
}

export default Contact