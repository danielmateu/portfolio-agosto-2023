import React from 'react'

import {RxRocket} from 'react-icons/rx'
import {AiOutlineGithub} from 'react-icons/ai'

import {FaReact} from 'react-icons/fa'
import {SiFirebase} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'


const CardTechDisplayed = ({title}) => {

  
  return (
    <div className={'flex gap-3'}>

        {title === 'TwentyDev' &&
        <>          
          <FaReact className={'text-[27px] text-cyan-400'}/>
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

        }

        {title === 'E-commerce' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'}/>
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          <SiFirebase className={'text-[27px] text-orange-600'}/>
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>

        }

        {title === 'Coffee-shop' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'}/>
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>
        
        }

         {title === 'YourResto' &&
        <>
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <FaReact className={'text-[27px] text-cyan-400'}/>
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

        }

        {title === 'Gym Site' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'}/>
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>
}       
        </div>
  )
}

export default CardTechDisplayed