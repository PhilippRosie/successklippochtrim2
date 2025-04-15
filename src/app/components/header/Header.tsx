'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo/successklippochtrimlogo.png';

interface HeaderProps {
  isVisible: boolean;
}

export default function Header({ isVisible }: HeaderProps) {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink} onClick={handleLogoClick}>
          <Image 
            src={logo}
            alt="Success Klipp och Trim Logo"
            className={styles.logo}
            width={200}
            height={250}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
