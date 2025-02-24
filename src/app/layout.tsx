import { Metadata } from 'next';
import { Montserrat, Playfair } from "next/font/google";
import React from 'react';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { Providers } from './_providers';
import { InitTheme } from './_providers/Theme/InitTheme';
import { mergeOpenGraph } from './_utilities/mergeOpenGraph';
import './global.css';

const inter = Montserrat({  weight: '400',
subsets: ['latin'], });

const tub = Playfair({  weight: '400',
subsets: ['latin'], });
 {/*import './_css/app.scss';*/}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="at" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <title>Markus Kral Antiquitäten - Einzigartige Funde und Schätze</title>
      <meta name="description" content="Bei Markus Kral: Entdecken Sie Möbel, Kunst & Sammlerstücke aus vergangenen Zeiten. Finden Sie einzigartige Antiquitäten & Ihr Stück Geschichte!"/>
      <meta name="keywords" content="Antiquitäten, Markus Kral Antiquitaeten, Linz, Oberösterreich, Markus Kral, Vintage Möbel, Sammlerstücke, Kunst, historische Funde"/>
      
      </head>
      <body className={inter.className}>
        <Providers>
     
    
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
