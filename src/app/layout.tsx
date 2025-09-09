import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rankly',
  description:
    'Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased contained `}>
        {children}
      </body>
    </html>
  );
}
