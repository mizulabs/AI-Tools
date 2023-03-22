import React, { useState, useEffect } from 'react';
import styles from './Menu.module.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.menuWrapper} style={{ position: 'relative', zIndex: 1 }}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`${styles.menuList} ${menuOpen || windowWidth >= 768 ? styles.menuListOpen : ''}`}>
        <li className={styles.menuItem}><a href="#">Home</a></li>
        <li className={styles.menuItem}><a href="#">About</a></li>
        <li className={styles.menuItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;