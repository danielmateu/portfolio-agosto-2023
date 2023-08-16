
import React from 'react'
import '../app/globals.css'

const Loader = () => {

  return (
    <div className={'fixed top-0 h-[100vh] w-full flex flex-col items-center justify-center bg-[#262737] z-[600]'}>

      <span className={"loader  relative"}></span>
      <span className={'text-gray-300 font-semibold text-[17px] mt-4'}>Desarrollando el futuro...</span>
    </div>
  )

}

export default Loader