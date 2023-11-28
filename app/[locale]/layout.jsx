import '../globals.css'
import Navbar from '../../components/Navbar'

import ThemeContext from '../context/ThemeContext'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Daniel Mateu - Portfolio',
  description: 'Portfolio de Daniel Mateu, desarrollador web fullstack',
  icon: 'https://res.cloudinary.com/daniel-mateu-pardo/image/upload/v1692264284/STK-20211030-WA0013_jc9ymw.webp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      </head>
      <body >
        <ThemeContext>
          <Navbar />
          {children}
          <Footer />
        </ThemeContext>
      </body>
    </html>
  )
}
