import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Chez Nguyen Restaurant | Modern Vietnamese Cuisine in Calgary',
  description:
    'Experience refined Vietnamese flavors at Chez Nguyen. Discover seasonal menus, chef specials, and an elevated dining atmosphere in the heart of Calgary.',
  openGraph: {
    title: 'Chez Nguyen Restaurant',
    description: 'Modern Vietnamese cuisine with contemporary flair.',
    url: 'https://cheznguyenrestaurant.ca',
    siteName: 'Chez Nguyen Restaurant',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable}`}>
      <body className="section-gradient min-h-screen">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 hero-overlay opacity-70" aria-hidden />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-6 sm:pt-12">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
