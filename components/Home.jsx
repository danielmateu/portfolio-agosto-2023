'use client'

import React, { useState, useContext } from 'react'

import Image from 'next/image'
import Context from '@/app/context/Context'
import '../app/[locale]/globals.css'

import myPic from '../public/assets/myPic.webp'

import { motion } from 'framer-motion'

import bg2 from '../public/assets/bg-2.svg'

import bgWhite2 from '../public/assets/bg-white-2.svg'
import { useTranslations } from 'next-intl'

const Home = () => {

  const [theme] = useContext(Context)

  const t = useTranslations('Index');

  return (
    <div className={'gradient relative w-full h-full flex flex-col items-center justify-center z-0'}>

      <div className={"w-full min-h-[90vh] sm:min-h-[100vh] flex flex-col-reverse sm:flex-row-reverse place-content-center justify-center items-center z-40  p-4 "}>

        {theme === 'dark' ?
          <Image width={1920} height={1080} src={bg2} priority alt="background" className={"w-[100%] min-h-[120vh] top-[-50px]  object-cover z-0  fixed"} />
          :
          <Image width={1920} height={1080} src={bgWhite2} priority alt="background" className={"w-[100%] min-h-[120vh] top-[-50px]  object-cover lg:object-contain z-0  fixed"} />
        }

        <motion.div initial={{ y: -40 }} animate={{ y: 0 }} transition={{ duration: 5, repeat: Infinity }} className={'relative flex justify-center items-center transition-all sm:pl-5'}>

          <Image width={180} height={180} priority alt='Small avatar of me' src={myPic} className={'-scale-x-100 w-auto  relative  rounded-full z-50  h-[150px] sm:mr-10 md:mr-20  mb-4 bottom-3 sm:h-[180px] sm:w-[200px] md:h-[230px] md:w-[250px]'} />

        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={'mb-16 w-[100%] z-10 max-w-[300px] sm:max-w-[100%] sm:ml-10  lg:pr-10 lg:ml-5'}>
          <div className="flex flex-col items-center justify-center  text-center md:justify-start md:text-left md:items-start">
            <span className={'text-[13px] text-sky-500 font-medium leading-none sm:text-[15px] md:text-[17px]'}>{t('welcome')}</span>
            <h1 className={`text-[35px] mt-0.5 ${theme !== 'dark' ? 'text-[#1F1D2B] ' : 'text-gray-50'} font-semibold leading-none sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[65px]`}>Daniel Mateu</h1>
            <p className={`mt-5   ${theme !== 'dark' ? 'text-gray-600' : 'text-[#bbb]'} font-medium w-[89%] text-sm sm:w-[65%] sm:text-[16px] md:text-[18px]`}>{t('description')}</p>
          </div>

          <motion.div className={'pt-8'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <div className='flex flex-wrap text-center gap-4 justify-center'>

              <a href='#projects' className={"text-sm border-[1px] font-regular border-sky-500 bg-sky-500 py-[9px] px-9  rounded-[5px]  text-white hover:text-slate-800 transition-all duration-200 hover:opacity-80 sm:text-base lg:text-lg"}>{t('btnleft')}</a>
              <a href='#contact' className={`bg-[#ffffff81] text-sm font-regular py-[9px] px-6 rounded-[5px] ${theme !== 'dark' ? 'text-gray-800' : 'text-[#fff]'} transition-all duration-200 hover:bg-sky-500 hover:text-white sm:text-base lg:text-lg`}>{t('btnright')}</a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  )

}

export default Home