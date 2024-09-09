import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}><a href="#home" >Home</a></li>
            <li className={styles.li}><a href="#about" >About</a></li>
            <li className={styles.li}><a href="#services">Services</a></li>
            <li className={styles.li}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;