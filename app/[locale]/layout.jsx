import '../globals.css'
import Navbar from '../../components/Navbar'

import ThemeContext from '../context/ThemeContext'
import Footer from '@/components/Footer'

import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useTranslations } from 'next-intl';



const locales = ['es', 'en'];
export default function RootLayout({ children, params: { locale } }) {
  
  const t = useTranslations('Index');
  const n = useTranslations('Navbar');
  const f = useTranslations('Footer');

  if (!locales.includes(locale)) {
    return notFound();
  }


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
          <NextIntlClientProvider>
            <Navbar
              home={n('home')}
              about={n('about')}
              projects={n('projects')}
              contact={n('contact')}
            />
            {children}
            <Footer
              title={f('title')}
              and={f('and')}
            />
          </NextIntlClientProvider>
        </ThemeContext>
      </body>
    </html>
  )
}
