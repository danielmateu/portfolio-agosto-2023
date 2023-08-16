'use client'

import Image from 'next/image'

import { ChakraProvider, FormErrorMessage, useToast, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

import triangle from '../public/assets/triangle.webp'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import avatar from '../public/assets/fullbodyAvatar.webp'

import Context from '@/app/context/Context'

import { useContext, useState } from 'react'

import { sendForm } from '@/lib/sendFrom'


import { motion } from 'framer-motion'

const initValues = { name: "", email: "", msg: "" }
const initState = { values: initValues }


function Contact() {

  const toast = useToast()

  const [theme, setTheme] = useContext(Context)

  const [state, setState] = useState(initState)

  const [valueChange, setValueChange] = useState({})

  const { values, isLoading } = state


  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    },
  }))

  const onBlur = ({ target }) => setValueChange((prevState) => ({
    ...prevState,

    [target.name]: true
  }))

  const onSubmit = async () => {

    if (values.name === '' || values.email === '' || values.msg === '') {

      toast({
        title: 'Fields missing!',
        description: 'Complete every field if you want to send the message please',
        status: 'error',
        duration: '4500',
        isClosable: true
      })
    } else {
      setState((prev) => ({
        ...prev,
        isLoading: true
      }))
      await sendForm(values)
      setValueChange({})
      setState(initState)
      toast({
        title: 'Message sent.',
        description: "Thank you for contacting with me!",
        status: 'success',
        position: "top",
        duration: 2500,
        isClosable: true,
      })
    }
  }




  return (
    <ChakraProvider>

      <section className={` pb-14 z-50 flex justify-center relative w-full ${theme === 'dark' ? 'bg-[#1F1D2B]' : 'bg-gray-100'}  pt-20`} id='contact'>


        <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={'w-full max-w-[850px] relative flex flex-col items-center justify-between sm:flex-row'}>

          <div className={'w-full max-w-[400px] flex flex-col justify-center  '}>

            <h6 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-semibold flex relative ml-5 mr-5`}>  <Image width={30} height={15} alt='triangleDesign' src={triangle} className={' max-h-[30px] relative bottom-[-6px] left-[-10px]'} />Quieres contactar?</h6>


            <form action="post" className={'flex flex-col w-[90%] max-w-[400px] gap-2 mt-14 self-center'}>

              <FormControl isInvalid={valueChange.name && !values.name}>

                <FormLabel htmlFor="name" className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}  text-gray-200 font-medium `}>Name:</FormLabel>

                <Input value={values.name} required onChange={handleChange}
                  name='name'
                  errorBorderColor='red.300'
                  onBlur={onBlur}
                  type="text"
                  border={'none'}
                  bg={`${theme !== 'dark' ? 'gray.300 ' : '#262737'}`}
                  className={`${theme !== 'dark' ? ' text-gray-800' : ' text-gray-200'}  min-h-[40px] rounded-md p-1 pl-2 `} />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>


              <FormControl isInvalid={valueChange.email && !values.email}>

                <FormLabel htmlFor="mail" className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-medium `}>Mail:</FormLabel>

                <Input value={values.email} required onChange={handleChange}
                  name='email'
                  errorBorderColor='red.300'
                  onBlur={onBlur}
                  border={'none'}
                  type="mail"
                  bg={`${theme !== 'dark' ? 'gray.300 ' : '#262737'}`}
                  className={` ${theme !== 'dark' ? ' text-gray-800' : 'text-gray-200'}   min-h-[40px] rounded-md p-1 pl-2 `} />
                <FormErrorMessage>Required</FormErrorMessage>

              </FormControl>

              <FormControl isInvalid={valueChange.msg && !values.msg}>
                <FormLabel htmlFor="message" className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} font-medium `}>Message:</FormLabel>

                <Textarea value={values.msg} required onChange={handleChange}
                  name="msg"
                  errorBorderColor='red.300'
                  onBlur={onBlur}
                  border={'none'}
                  cols="30"
                  rows="10"
                  bg={`${theme !== 'dark' ? 'gray.300 ' : '#262737'}`}
                  className={`${theme !== 'dark' ? ' text-gray-800' : ' text-gray-200'} rounded-md  p-1 pl-2`}></Textarea>

                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>


              <Button onClick={(e) => e.preventDefault() & onSubmit()}
                isLoading={isLoading}
                bg={'#8222b9'}
                _hover={'#8222b9'}
                className={' text-base border-[1px] font-regular border-[#9333EA]  py-[6px] px-9 mt-3 rounded-[5px] text-white transition-all duration-200 hover:opacity-80  lg:text-lg'}>
                Enviar
              </Button>
            </form>

            <h6 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-xl font-medium text-left self-left mt-10 self-center`}>Redes sociales: </h6>
            <div className={'flex gap-5 mt-5 mb-10 self-center'}>
              <a href="https://www.linkedin.com/in/daniel-mateu-pardo/" target='_blank'>
                <AiFillLinkedin className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer`} />

              </a>

              <a href="https://www.instagram.com/danimateu86/" target='_blank'>
                <AiOutlineInstagram className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer`} />

              </a>

              <a href="https://github.com/danielmateu" target='_blank'>
                <AiFillGithub className={`text-[30px] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} scale-100 hover:scale-110 hover:text-[#9333EA] transition-all duration-200 cursor-pointer`} />

              </a>
            </div>

          </div>

          <div className={'self-center mb-20'}>
            <Image width={1900} height={1500} src={avatar} className={'h-auto w-auto min-h-[380px] max-w-[250px] md:min-h-[500px] md:mr-10 object-cover'} alt='Full body avatar' />
          </div>
        </motion.div>



      </section>
    </ChakraProvider>
  )
}

export default Contact