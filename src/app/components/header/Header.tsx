'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import logo from '../../../assets/images/logo/successklippochtrimlogo.png';

interface HeaderProps {
  isVisible: boolean;
}

export default function Header({ isVisible }: HeaderProps) {
  const router = useRouter();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
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
