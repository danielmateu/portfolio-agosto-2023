'use client'

import '../app/globals.css'

import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../app/globals.css'
import logo from '../public/assets/logo.webp'
import Context from '@/app/context/Context'
import { useContext } from 'react'
import Image from 'next/image'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Proyectos', href: '#projects', current: true },
  { name: 'Sobre mi', href: '#aboutme', current: true },
  { name: 'Contacto', href: '#contact', current: true },
]

export default function Navbar({
  home,
  about,
  projects,
  contact
}) {
  const [theme] = useContext(Context)
  return (
    <Disclosure as="nav" className={` ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-50'} fixed w-full z-[500]`}>
      {({ open }) => (
        <>
          <div className={"mx-auto px-2 sm:px-6 lg:px-20"}>
            <div className={"relative flex w-full h-16 items-center justify-between"}>
              <div className={"absolute inset-y-0 left-0 flex items-center sm:hidden"}>
                {/* Mobile menu button*/}
                <Disclosure.Button className={"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}>
                  {/* <span className="sr-only">Abrir menú principal</span> */}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={"flex flex-1 py-4 items-center sm:items-center sm:justify-between"}>
                <div className={"flex flex-shrink-0 m-auto sm:m-0 items-center"}>
                  <Image width={40} height={40}
                    className={"hidden w-auto sm:inline scale-90 transition"}
                    src={logo}
                    alt="Portfolio logo"
                  />
                </div>
                <div className={"hidden sm:block"}>
                  <div className={"flex "}>
                    <a href={'#'} className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-800  '} rounded-md px-3 py-2 text-[15px]   hover:text-sky-500 transition-all duration-200 font-medium `}>{home}</a>
                    <a href={'#projects'} className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-800  '} rounded-md px-3 py-2 text-[15px]   hover:text-sky-500 transition-all duration-200 font-medium `}>{projects}</a>
                    <a href={'#aboutme'} className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-800  '} rounded-md px-3 py-2 text-[15px]   hover:text-sky-500 transition-all duration-200 font-medium `}>{about}</a>
                    <a href={'#contact'} className={`${theme === 'dark' ? 'text-gray-100' : 'text-gray-800  '} rounded-md px-3 py-2 text-[15px]   hover:text-sky-500 transition-all duration-200 font-medium `}>{contact}</a>
                  </div>
                </div>

                <ThemeToggler />
              </div>

            </div>
          </div>
          {/* MOBILE MENU */}

          <Disclosure.Panel className={"sm:hidden"}>
            <div className={"space-y-1 px-2 pb-3 pt-2"}>
              <Disclosure.Button
                as="a"
                href={'#'}
                className={`${theme === 'dark' ? ' text-white' : 'text-gray-800'} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                {home}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={'#'}
                className={`${theme === 'dark' ? ' text-white' : 'text-gray-800'} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                {projects}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={'#'}
                className={`${theme === 'dark' ? ' text-white' : 'text-gray-800'} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                {about}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href={'#'}
                className={`${theme === 'dark' ? ' text-white' : 'text-gray-800'} hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                {contact}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
