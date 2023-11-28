"use client"

import { useContext } from 'react'
import cv from '../public/danielmateu2023.pdf'
import Context from '@/app/context/Context'

export const Download = ({
    download,
    downloadButton
}) => {

    const [theme] = useContext(Context)
    return (
        <div className={`mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
            <p className={'font-medium'}>{download}<a href={cv} download={true} className={'text-sky-500 font-semibold hover:underline'} >    {downloadButton}</a> </p>
        </div>
    )
}
