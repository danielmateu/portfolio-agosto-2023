// "use client"

// import { useContext } from 'react'
// import cv_es from '../public/danielmateu2023.pdf'
// import cv_eng from '../public/danielmateu2023_eng.pdf'
// import Context from '@/app/context/Context'
// import { useRouter } from 'next/navigation'

// export const Download = ({
//     download,
//     downloadButton
// }) => {

//     const [theme] = useContext(Context)
//     const router = useRouter()

//     return (
//         <div className={`mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
//             <p className={'font-medium'}>{download}<a href={cv} download={true} className={'text-sky-500 font-semibold hover:underline'} >    {downloadButton}</a> </p>
//         </div>
//     )
// }

"use client"

import { useContext } from 'react'
import cv_es from '../public/danielmateu2023.pdf'
import cv_eng from '../public/danielmateu2023_eng.pdf'
import Context from '@/app/context/Context'
import { usePathname } from 'next/navigation'




export const Download = ({
    download,
    downloadButton
}) => {

    const [theme] = useContext(Context)
    const pathname =  usePathname()

    // Seleccionar el archivo PDF en función de la ruta
    const cv = pathname.startsWith('/en') ? cv_eng : cv_es;

    return (
        <div className={`mt-20 ${theme !== 'dark' ? 'text-[#262737]' : 'text-gray-200'}    text-lg mb-10`}>
            <p className={'font-medium'}>{download}<a href={cv} download={true} className={'text-sky-500 font-semibold hover:underline'} >    {downloadButton}</a> </p>
        </div>
    )
}