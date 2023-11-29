'use client'

import React, { useState, useEffect, Fragment, useRef, useContext, Suspense } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

import CardTechDisplayed from './CardTechDisplayed'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import Context from '@/app/context/Context'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import modalBG from '@/public/Sprinkle.svg'
import modalBGwhite from '@/public/Sprinklewhite.svg'
import Link from 'next/link'

const ProjectModal = ({ title, description, urlDeploy, urlRepo, state, sliderImages }) => {

  const [theme, setTheme] = useContext(Context)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkState = () => {
      if (state === true) {
        setOpen(state)
      }
    }

    checkState()

  }, [state])

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment} key={title}>
      <Dialog as="div" className="relative z-[300] " initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#101010] bg-opacity-75 transition-opacity pl-10" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel id='projectModal' className={`relative  flex flex-col justify-center items-center w-full  overflow-hidden rounded-lg min-h-[70vh] ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-100'} text-left shadow-2xl transition-all mt-20 sm:w-[95%]    lg:max-w-[1000px] lg:p-3 mb-10 `}>
                {theme === 'dark' ?
                  <Image width={1920} height={1080} alt={description} src={modalBG} className='w-full h-full absolute  bottom-0 object-cover z-0' />
                  :
                  <Image width={1920} height={1080} alt={description} src={modalBGwhite} className='w-full h-full absolute bottom-0  object-cover z-0' />
                }
                <div className="w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4 z-10">
                  <div className="  w-full     sm:max-w-max">
                    <div id='slider-container' className="mx-auto flex flex-col    rounded-[10%]  items-center justify-center   " >

                      <Swiper
                        modules={[Pagination]}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        className='h-[100%] max-w-[99%] m-auto p-0'
                      >
                        {sliderImages?.map((image) => (
                          <SwiperSlide key={image}>
                            <Image
                              priority={true}
                              blurDataURL={`${image.img}`}
                              placeholder='blur'
                              alt={description}
                              src={image.img}
                              width={1920}
                              height={1080}
                              className='w-full object-contain rounded-lg lg:min-w-[370px] transition-all duration-200 hover:shadow-xl'
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-[99%]">
                      <Dialog.Title as="h3" className={`font-bold text-xl md:text-2xl text-left pl-2 leading-6 mb-2   sm:pt-5 ${theme === 'dark' ? 'text-gray-50' : 'text-black'} flex justify-between`}>
                        <div>
                          <span className=''>{title} </span>
                        </div>
                        <span className='hidden text-sm sm:text-xl  pl-3 sm:inline sm:pr-7'> </span>
                      </Dialog.Title>
                      <div className="flex flex-col  ">

                        <p className={`text-xs sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-left p-2 pb-0`}>
                          {description}
                        </p>


                        <div className='flex flex-col gap-3 pl-3 '>
                          <h3 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-left pt-10 font-semibold`}>Techs used:</h3>

                          <CardTechDisplayed title={title} />
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[95%] items-center justify-between z-50  sm:px-6 mt-4 mb-4">

                  <div className='w-auto h-auto flex gap-4'>
                    <Link href={urlDeploy} target='_blank' name='deploy' className=' text-xs rounded-lg  sm:text-sm font-semibold px-10  py-[10px]  text-gray-50 shadow-sm sm:mt-1   transition duration-200 bg-sky-500 hover:opacity-90 '>Visit</Link>

                    <Link href={urlRepo} target='_blank' name='repo' className={` text-xs rounded-lg  sm:text-sm font-semibold px-4 py-[10px] border border-sky-500  ${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} shadow-sm sm:mt-1  transition duration-200 hover:bg-sky-500 hover:text-white  `}>Repository</Link>
                  </div>

                  <button
                    type="button"
                    name='close modal'
                    className={` rounded-md py-[10px]   px-4 text-sm font-semibold   ${theme === 'dark' ? 'text-gray-50' : 'text-gray-900'} shadow-sm sm:mt-1  transition duration-200 hover:bg-gray-200 hover:text-gray-900`}
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProjectModal