'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo/successklippochtrimlogo.png';

interface HeaderProps {
  isVisible: boolean;
}

export default function Header({ isVisible }: HeaderProps) {
  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.logoContainer}>
        <a href="/" className={styles.logoLink}>
          <Image 
            src={logo}
            alt="Success Klipp och Trim Logo"
            className={styles.logo}
            width={200}
            height={150}
            priority
          />
        </a>
      </div>
    </header>
  );
}
