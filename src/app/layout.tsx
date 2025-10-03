import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Narges Hashemi | Backend Developer',
  description: 'Personal portfolio of Narges Hashemi, an experienced Backend Developer specializing in Java, Spring Boot, and Oracle Database.',
  keywords: 'Backend Developer, Java, Spring Boot, Oracle Database, Portfolio, Narges Hashemi',
  authors: [{ name: 'Narges Hashemi' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Narges Hashemi | Backend Developer',
    description: 'Personal portfolio of Narges Hashemi, an experienced Backend Developer specializing in Java, Spring Boot, and Oracle Database.',
    type: 'website',
    url: 'https://hmenarges.github.io/',
    images: [
      {
        url: 'https://hmenarges.github.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Narges Hashemi | Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narges Hashemi | Backend Developer',
    description: 'Personal portfolio of Narges Hashemi, an experienced Backend Developer specializing in Java, Spring Boot, and Oracle Database.',
    images: ['https://hmenarges.github.io/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
