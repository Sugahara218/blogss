import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from './header';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Notion Next.js blog',
  description: 'Notion Next.js blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
