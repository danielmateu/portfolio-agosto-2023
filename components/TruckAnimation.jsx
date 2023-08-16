'use client'
import React, {useState, useContext} from 'react'

import '../app/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import Context from '@/app/context/Context'

const TruckAnimation = () => {

  const [theme, setTheme] = useContext(Context)

  const [truckDisplay, setTruckDisplay] = useState(true)
  const [scrollDisplay, setScrollDisplay] = useState(false)



  setTimeout(()=>{
    setTruckDisplay(false)
  }, 4700)

  setTimeout(()=>{
    setScrollDisplay(true)
  }, 3500)

  return (
    <>
      <span className={`truckAnimation bottom-5 left-0 w-full  z-50 ${truckDisplay ? 'inline' : 'hidden'} `}></span>

      {scrollDisplay && 
      <>
        <span className={`scrollDown absolute bottom-14 z-40 border-[2px] ${theme === 'dark' ? 'border-[#fff] before:bg-white' : 'border-gray-800 before:bg-gray-800'} `}></span>
        <span className={`absolute bottom-7 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} font-medium z-40 text-sm`}>Scroll down</span>
      </>
      }
    </>
  )
}

export default TruckAnimation