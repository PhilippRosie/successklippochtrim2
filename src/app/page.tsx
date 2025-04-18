// Aktiverar klient-side rendering för denna komponent
// Detta är nödvändigt eftersom vi använder interaktiva funktioner som useState och useEffect
'use client';

// Importerar nödvändiga paket och komponenter
import { motion } from 'framer-motion'; // Används för animationer
import { useState, useEffect } from 'react'; // React hooks för state-hantering och sidoeffekter
import Image from 'next/image'; // Next.js optimerad bildkomponent
import styles from './page.module.css' // Importerar CSS-modulen för styling
import foreground from '../assets/images/homepage-img/forground.png' // Importerar foreground-bilden (porten)
import backgroundPark from '../assets/images/homepage-img/background-park.png' // Importerar bakgrundsbilden (parken)
import frameImageSide from '../assets/images/homepage-img/homepage-frameside.png';
import Header from './components/header/Header';
import Behandlingar from './components/behandlingar/Behandlingar';
import Ommig from './components/ommig/Ommig';
import Kontakt from './components/kontakt/Kontakt';
import { playfairDisplaySC } from './fonts';
import logo from '../assets/images/homepage-img/logo.png'

// Huvudkomponenten för startsidan
export default function Home() {
  // State för att kontrollera när menyn ska visas
  // false = menyn är dold, true = menyn visas
  const [showMenu, setShowMenu] = useState(false);
  
  // State för att kontrollera när bakgrundseffekten ska starta
  // false = ingen effekt, true = gråskala och blur effekt
  const [startBackgroundEffect, setStartBackgroundEffect] = useState(false);

  // I komponenten, lägg till state för att kontrollera visning av behandlingar
  const [showBehandlingar, setShowBehandlingar] = useState(false);
  const [showOmmig, setShowOmmig] = useState(false);
  const [showKontakt, setShowKontakt] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect hook som körs när komponenten mountas
  useEffect(() => {
    // Skapar en timer som aktiverar menyn och bakgrundseffekten efter 7 sekunder
    // Detta är samma tid som port-animationen tar
    const timer = setTimeout(() => {
      setShowMenu(true); // Visar menyn
      setStartBackgroundEffect(true); // Startar bakgrundseffekten
    }, 7000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Cleanup-funktion som körs när komponenten unmountas
    // Detta förhindrar minnesläckor genom att rensa timern
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []); // Tom dependency array betyder att detta körs en gång vid mount

  const resetAnimation = () => {
    setShowMenu(false);
    setStartBackgroundEffect(false);
    setShowBehandlingar(false);
    setShowOmmig(false);
    setShowKontakt(false);
    setAnimationKey(prev => prev + 1);
    
    setTimeout(() => {
      setShowMenu(true);
      setStartBackgroundEffect(true);
    }, 7000);
  };

  return (
    <div className={styles.container}>
      <Header isVisible={showMenu} />
      {/* Container för bilderna */}
      <div className={styles.imageContainer}>
        {/* Bakgrundsbilden */}
        <motion.div
          key={`bg-${animationKey}`}
          className={styles.backgroundContainer}
          animate={startBackgroundEffect ? {
            filter: ['grayscale(0%) blur(0px)', 'grayscale(100%) blur(10px)'],
          } : {}}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <Image 
            src={backgroundPark}
            alt="Background" 
            className={styles.backgroundImage}
            fill
          />
        </motion.div>

        {/* Logotypen */}
        <motion.div
          key={`logo-${animationKey}`}
          className={styles.logoContainer}
          initial={{ scale: isMobile ? 0.15 : 0.15, opacity: 0.3 }}
          animate={{ 
            scale: isMobile ? [0.15, 0.4, 0.5] : [0.15, 0.75, 1],
            opacity: [0.3, 1, 0],
            z: [0, 1200, 2000]
          }}
          transition={{ 
            duration: 7,
            times: [0, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          
          <Image 
            src={logo}
            alt="Logo"
            className={styles.logoImage}
            width={150}
            height={150}
            quality={100}
            loading="eager"
            priority={false}
            unoptimized
            onClick={resetAnimation}
            style={{ cursor: 'pointer' }}
          />
        </motion.div>
        
        {/* Foreground-bilden (porten) */}
        <motion.div
          className={styles.foregroundContainer}
          initial={{ scale: 1 }}
          animate={{ 
            scale: 5,
            filter: ['blur(0px)', 'blur(0px)', 'blur(20px)'],
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 7,
            times: [0, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          <Image 
            src={foreground}
            alt="Foreground" 
            className={styles.foregroundImage}
            fill
            priority
          />
        </motion.div>

        <motion.div 
          className={styles.parkImageContainer}
          initial={{ scale: 1, y: 0 }}
          animate={{ 
            scale: [1, 1.1, 1.15],
            y: [0, -20, -30],
          }}
          transition={{
            duration: 7,
            times: [0, 0.7, 1],
            ease: "easeIn"
          }}
        >
      
        </motion.div>
      </div>

      {/* Menycontainer som fadear in */}
      <div className={`${styles.menuContainer} ${showMenu ? styles.visible : ''}`} 
           style={{ '--frame-image': `url(${frameImageSide.src})` } as React.CSSProperties}>
        {/* Menyelement */}
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowBehandlingar(true)}
        >
          <span className={styles.menuText}>Behandlingar</span>
        </div>
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowOmmig(true)}
        >
          <span className={styles.menuText}>Om Mig</span>
        </div>
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowKontakt(true)}
        >
          <span className={styles.menuText}>Kontakt <br /> & <br /> Information</span>
        </div>
      </div>
      
      {/* Lägg till Treatments-komponenten i slutet av return */}
      {showBehandlingar && (
        <Behandlingar onClose={() => setShowBehandlingar(false)} />
      )}

      {showOmmig && (
        <Ommig onClose={() => setShowOmmig(false)} />
      )}

      {showKontakt && (
        <Kontakt onClose={() => setShowKontakt(false)} />
      )}
    </div>
  )
}
