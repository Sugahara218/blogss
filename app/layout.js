import '../styles/globals.css';
import GQHeader from '../components/header/Gqheader';

export const metadata = {
  title: 'Notion Next.js blog',
  description: 'Notion Next.js blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <GQHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
