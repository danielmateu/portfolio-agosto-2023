import '../globals.css'
import Navbar from '../../components/Navbar'

import ThemeContext from '../context/ThemeContext'
import Footer from '@/components/Footer'

import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

const locales = ['es', 'en'];
export default function RootLayout({ children, params: { locale } }) {

  if (!locales.includes(locale)) {
    return notFound();
  }

  const t = useTranslations('Index');

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <link rel="icon" href={t('icon')} />
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
