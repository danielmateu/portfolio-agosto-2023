'use client'
import React, { useState } from 'react'
import Image from 'next/image'


import {RxRocket} from 'react-icons/rx'
import {AiOutlineGithub} from 'react-icons/ai'


import Context from '@/app/context/Context'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import ProjectModal from './ProjectModal'
import CardTechDisplayed from './CardTechDisplayed'

const ProjectCard = ({title, img, description, urlDeploy, urlRepo, sliderImages}) => {
  

  
  const [theme, setTheme] = useContext(Context)
  const [open, setOpen ] = useState(false)

  const checkModalState = ()=>{
    if(open === false){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }

  
  return (
    <motion.div initial={{y:150}} whileInView={{y:0}} transition={{ duration: 0.5 }} viewport={{once:true}} className={'flex w-[100%] max-w-[350px]  md:max-w-[750px] lg:max-w-[850px] md:gap-x-16 flex-col md:flex-row m-auto  justify-center items-center z-50'}>

    <div  className={'m-auto pb-5 w-full'} >

      <button onClick={()=> checkModalState()}  className='w-full'>

        <Image width={1920} height={1080} alt={description} src={img} className={'w-full min-w-[300px] rounded-lg lg:min-w-[370px]  hover:scale-105 transition-all duration-200 hover:shadow-2xl'} />
        
        
      </button>
        <ProjectModal state={open} img={img} description={description} urlDeploy={urlDeploy} title={title} urlRepo={urlRepo} sliderImages={sliderImages}/>
    </div>

    <div className={'w-full sm:self-end sm:ml-10 mb-5}'}>
    <div className={'flex w-full justify-between items-start  mt-5 md:w-[90%]'}>
    <h3 className={`${theme !== 'dark' ? 'text-gray-800' : 'text-white'} ml-1   text-lg font-medium z-50 lg:text-xl`}>{title} </h3>

      <div className={' pb-10 self-start ml-1 flex gap-4 '}>
        <a href={urlRepo} target='_blank' className={'flex flex-col text-xs text-[#9333EA]'}><AiOutlineGithub  className={'text-[24px] cursor-pointer  hover:opacity-80'}/></a>
        <a href={urlDeploy} target='_blank' > <RxRocket className={'text-[24px]  text-[#9333EA] cursor-pointer  hover:opacity-80 '} /></a>
      </div>
    </div> 

    <p className={`${theme !== 'dark' ? 'text-gray-600' : 'text-gray-300'} text-[14px] self-center  z-50 w-[100%] md:w-[95%]`}>{description} </p>

      <div className={'flex w-full justify-between items-start  mt-5 md:w-[90%]'}>
      <h4 className={`${theme !== 'dark' ? 'text-gray-800' : 'text-gray-100'} self-start ml-1 font-semibold`}>Techs used:</h4>

        
        <CardTechDisplayed title={title} />

      </div>


    </div>

    

  </motion.div>
  )
}

export default ProjectCard