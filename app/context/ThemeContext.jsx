'use client'

import React, {useEffect, useState} from 'react'

import Context from './Context'

const ThemeContext = ({children}) => {

  const [theme, setTheme] = useState(()=>{
    const localTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'dark'

    return localTheme ? localTheme : 'dark'
  })



  useEffect(()=>{

    localStorage.setItem('theme', theme)

  },[theme])

  return (
    <Context.Provider value={[theme, setTheme]}>
      {children}
    </Context.Provider>
  )
}

export default ThemeContext