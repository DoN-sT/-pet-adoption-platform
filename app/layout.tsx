import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/**
 * Root layout component for the Pet Adoption Platform
 */
export const metadata: Metadata = {
  title: 'PetMatch - Pet Adoption and Selling Platform',
  description: 'Find your perfect companion. Browse pets available for adoption and sale in your area.',
  keywords: ['pet adoption', 'pet selling', 'dogs', 'cats', 'birds', 'pets for sale', 'pets for adoption'],
  authors: [{ name: 'PetMatch Team' }],
  openGraph: {
    title: 'PetMatch - Pet Adoption and Selling Platform',
    description: 'Find your perfect companion. Browse pets available for adoption and sale in your area.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
