import Link from 'next/link';
import Image from 'next/image'; // Imageコンポーネントをインポート

const styles = {
  header: {
    fontFamily: 'sans-serif',
    background: 'white',
  },
  container: {
    margin: '0 auto',
    padding: '0 1rem',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.4rem 0',
  },
  desktopNav: {
    gap: '1rem',
  },
  navLink: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#000',
  },
  menuButton: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileMenuButton: {
    padding: '0.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  menuIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  bottomNav: {
    borderTop: '1px solid #e5e7eb',
    borderBottom: '1px solid #e5e7eb',
  },
  bottomNavList: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    margin: 0,
    listStyle: 'none',
    overflowX: 'auto',
  },
  bottomNavItem: {
    whiteSpace: 'nowrap',
  },
  bottomNavLink: {
    fontSize: '0.75rem',
    color: '#111',
    textTransform: 'uppercase',
    fontWeight: '500',
    textDecoration: 'none',
  },
  '@media (min-width: 640px)': {
    desktopNav: {
      display: 'flex',
    },
    mobileMenuButton: {
      display: 'none',
    },
    bottomNavLink: {
      fontSize: '0.875rem',
    },
  },
};

export default function GQHeader() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.topBar}>
          <nav style={styles.desktopNav}>
            <Link href="/subscription" style={styles.navLink}>Subscription</Link>
            <Link href="/shop" style={styles.navLink}>GQ Shop</Link>
          </nav>
          <div style={styles.logoContainer}>
            <Link href="/" style={styles.logo}>GQ</Link>
          </div>
          <div style={styles.menuButton}>
            <button type="button" style={styles.mobileMenuButton} aria-label="Open menu">
              <Image src="/menu-icon.svg" alt="Menu" width={24} height={24} style={styles.menuIcon} />
            </button>
          </div>
        </div>
      </div>
      <nav style={styles.bottomNav}>
        <div style={styles.container}>
          <ul style={styles.bottomNavList}>
            {['Fashion', 'Cars', 'Watches', 'Art', 'Lifestyle and Culture', 'Sports', 'Video', 'Men of the Year'].map((item) => (
              <li key={item} style={styles.bottomNavItem}>
                <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} style={styles.bottomNavLink}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
