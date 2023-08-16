import React from 'react'


import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'


const CardTechDisplayed = ({ title }) => {


  return (
    <div className={'flex gap-3'}>

      {title === 'Four Frame' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          < SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

      }

      {title === 'Nuko AI' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          {/* <SiFirebase className={'text-[27px] text-orange-600'} /> */}
          {/* <SiTailwindcss className={'text-[27px] text-cyan-400'} /> */}
          {/* <FaBootstrap className={'text-[27px] text-purple-600'} /> */}
        </>

      }

      {title === 'Coffee-shop' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'} />
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>

      }

      {title === 'YourResto' &&
        <>
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

      }

      {title === 'Gym Site' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'} />
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>
      }
    </div>
  )
}

export default CardTechDisplayed