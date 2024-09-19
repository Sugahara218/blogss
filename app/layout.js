import '../styles/globals.css';
import GQHeader from '../components/header/Gqheader';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: 'Ryousuke Audio Blog',
  description: 'Ryousuke Audio Blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <GQHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
