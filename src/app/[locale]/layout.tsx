import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ReactNode } from 'react';

export async function generateMetadata({params}: any) {
  const { locale } = await params;
  return {
    title: 'ReflexRent — Location Voiture de Luxe · Ferrari, Lamborghini, Mercedes · Paris',
    description: 'Ferrari, Lamborghini, Range Rover, Mercedes G, Maybach, Porsche… Plus de 50 véhicules d\'exception en location courte ou longue durée à Paris.',
    themeColor: '#00060f',
    colorScheme: 'dark',
    openGraph: {
      title: 'ReflexRent — Location de Véhicules d\'Exception · Paris',
      description: "L'art de rouler autrement.",
      siteName: 'ReflexRent',
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ReflexRent' }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      languages: { fr: '/fr/', en: '/en/' },
    },
  };
}
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: any;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client side
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className="antialiased bg-[#0a0c10] text-white overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <div className="bg-orbs" aria-hidden="true" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
