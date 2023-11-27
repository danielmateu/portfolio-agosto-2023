import './globals.css'
import Navbar from '../../components/Navbar'

import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { useLocale } from 'next-intl';

import ThemeContext from '../context/ThemeContext'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Daniel Mateu - Portfolio',
  description: 'Portfolio de Daniel Mateu, desarrollador web fullstack',
  icon: 'https://res.cloudinary.com/daniel-mateu-pardo/image/upload/v1692264284/STK-20211030-WA0013_jc9ymw.webp',
}

export default async function RootLayout({ children, params }) {

  const locale = useLocale();

  if (locale != locale) {
    notFound()
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      </head>
      <body >
        <ThemeContext>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeContext>
      </body>
    </html>
  )
}
