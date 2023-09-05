import { FaReact, FaStripe, FaSass, FaBootstrap } from 'react-icons/fa'
import { SiFirebase, SiPrisma, SiSupabase, SiMongodb } from 'react-icons/si'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

const CardTechDisplayed = ({ title }) => {


  return (
    <div className={'flex gap-3'}>

      {title === 'Four Frame' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
        </>

      }

      {title === 'Nuko AI' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-blue-500'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          <SiPrisma className={'text-[27px] text-slate-500'} />
          <FaStripe className={'text-[27px] text-slate-400'} />
        </>

      }

      {
        title === 'Dudes AI' &&
        <>
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          <SiPrisma className={'text-[27px] text-slate-500'} />
          <FaStripe className={'text-[27px] text-slate-400'} />
        </>
      }

      {title === 'Spotify Clone' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          <SiSupabase className={'text-[27px] text-green-400'} />
        </>

      }

      {title === 'Solid Camper Store' &&
        <>
          <FaReact className={'text-[27px] text-cyan-400'} />
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-cyan-400'} />
          <FaBootstrap className={'text-[27px] text-purple-600'} />
          <SiMongodb className={'text-[27px] text-green-500'} />
        </>

      }

      {
        title === 'My Places' &&
        <>
          <SiNextdotjs className={'text-[27px] text-gray-500'} />
          <SiTypescript className={'text-[27px] text-cyan-400'} />
          <SiTailwindcss className={'text-[27px] text-cyan-400'} />
          <SiPrisma className={'text-[27px] text-slate-500'} />
          <SiMongodb className={'text-[27px] text-green-500'} />
        </>

      }

      {/* {title === 'CRM de Clientes' &&
        <>
          <SiJavascript className={'text-[27px] text-yellow-400'} />
          <FaSass className={'text-[27px] text-pink-600'} />
          <FaBootstrap className={'text-[27px] text-purple-600'} />
        </>
      } */}
    </div>
  )
}

export default CardTechDisplayed