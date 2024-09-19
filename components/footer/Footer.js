const styles = {
  gqFooter: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 0',
    fontFamily: 'Arial, sans-serif',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footerLogo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  footerNav: {
    ul: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '30px',
    },
    li: {
      margin: '0 15px 10px',
    },
    a: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
  },
  socialLinks: {
    textAlign: 'center',
    marginBottom: '30px',
    a: {
      color: '#fff',
      fontSize: '24px',
      margin: '0 10px',
      textDecoration: 'none',
    },
  },
  footerInfo: {
    textAlign: 'center',
    fontSize: '12px',
    p: {
      marginBottom: '10px',
    },
    ul: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    li: {
      margin: '0 10px',
    },
    a: {
      color: '#fff',
      textDecoration: 'none',
    },
  },
};

function Footer() {
  return (
    <footer style={styles.gqFooter}>
      <div style={styles.footerContainer}>
        {/* <div style={styles.footerLogo}>
          <img src="/placeholder.svg?height=50&width=100" alt="GQ Japan Logo" />
        </div> */}
        <nav>
          <ul style={styles.footerNav.ul}>
            {['Video', 'Audio'].map((item) => (
              <li key={item} style={styles.footerNav.li}>
                <a href="/" style={styles.footerNav.a}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={styles.socialLinks}>
          {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
            <a key={platform} href="/" aria-label={platform} style={styles.socialLinks.a}>
              <i className={`icon-${platform.toLowerCase()}`} />
            </a>
          ))}
        </div>
        <div style={styles.footerInfo}>
          <p style={styles.footerInfo.p}>&copy; 2024 Condé Nast Japan. All rights reserved.</p>
          <ul style={styles.footerInfo.ul}>
            {['プライバシーポリシー', '利用規約', '広告掲載', 'お問い合わせ'].map((item) => (
              <li key={item} style={styles.footerInfo.li}>
                <a href="/" style={styles.footerInfo.a}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
