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
import frameImage from '../assets/images/homepage-img/homepage-frame.png';
import frameSideImage from '../assets/images/homepage-img/homepage-frameside.png';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Behandlingar from './components/behandlingar/Behandlingar';
import Ommig from './components/ommig/Ommig';
import Kontakt from './components/kontakt/Kontakt';
import { playfairDisplaySC } from './fonts';

// Huvudkomponenten för startsidan
export default function Home() {
  // State för att kontrollera när menyn ska visas
  // false = menyn är dold, true = menyn visas
  const [showMenu, setShowMenu] = useState(false);
  
  // State för att kontrollera när bakgrundseffekten ska starta
  // false = ingen effekt, true = gråskala och blur effekt
  const [startBackgroundEffect, setStartBackgroundEffect] = useState(false);

  // Lägg till dessa states högst upp i komponenten
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  // I komponenten, lägg till state för att kontrollera visning av behandlingar
  const [showBehandlingar, setShowBehandlingar] = useState(false);
  const [showOmmig, setShowOmmig] = useState(false);
  const [showKontakt, setShowKontakt] = useState(false);

  // useEffect hook som körs när komponenten mountas
  useEffect(() => {
    // Skapar en timer som aktiverar menyn och bakgrundseffekten efter 7 sekunder
    // Detta är samma tid som port-animationen tar
    const timer = setTimeout(() => {
      setShowMenu(true); // Visar menyn
      setStartBackgroundEffect(true); // Startar bakgrundseffekten
    }, 7000);

    // Cleanup-funktion som körs när komponenten unmountas
    // Detta förhindrar minnesläckor genom att rensa timern
    return () => clearTimeout(timer);
  }, []); // Tom dependency array betyder att detta körs en gång vid mount

  return (
    <div className={styles.container}>
      <Header isVisible={showMenu} />
      {/* Container för bilderna */}
      <div className={styles.imageContainer}>
        {/* Bakgrundsbilden med gråskala och blur-effekt */}
        <motion.div
          className={styles.backgroundContainer}
          // Animerar bakgrunden endast när startBackgroundEffect är true
          animate={startBackgroundEffect ? {
            // Går från normal färg till gråskala och blur
            filter: ['grayscale(0%) blur(0px)', 'grayscale(100%) blur(10px)'],
          } : {}}
          // Animeringsinställningar
          transition={{ 
            duration: 1.5, // Tar 1.5 sekunder
            ease: "easeInOut" // Mjuk acceleration och retardation
          }}
        >
          {/* Bakgrundsbilden */}
          <Image 
            src={backgroundPark}
            alt="Background" 
            className={styles.backgroundImage}
            fill // Fyller hela containern
          />
        </motion.div>
        
        {/* Foreground-bilden (porten) med zoom-effekt */}
        <motion.div
          className={styles.foregroundContainer}
          // Startposition
          initial={{ scale: 1 }}
          // Animeringsmål
          animate={{ 
            scale: 5, // Zoomar in 5x
            filter: ['blur(0px)', 'blur(0px)', 'blur(20px)'], // Blur-effekt mot slutet
            opacity: [1, 1, 0] // Förblir synlig tills slutet
          }}
          // Animeringsinställningar
          transition={{ 
            duration: 7, // Tar 7 sekunder
            times: [0, 0.8, 1], // Timing för olika steg i animationen
            ease: "easeInOut" // Mjuk acceleration och retardation
          }}
        >
          {/* Foreground-bilden */}
          <Image 
            src={foreground}
            alt="Foreground" 
            className={styles.foregroundImage}
            fill // Fyller hela containern
            priority // Prioriterar laddning av bilden
          />
        </motion.div>
      </div>

      {/* Menycontainer som fadear in */}
      <div className={`${styles.menuContainer} ${showMenu ? styles.visible : ''}`} 
           style={{ '--frame-image': `url(${frameImage.src})` } as React.CSSProperties}>
        {/* Menyelement */}
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowBehandlingar(true)}
        >
          Behandlingar
        </div>
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowOmmig(true)}
        >
          Om Mig
        </div>
        <div 
          className={`${styles.menuItem} ${playfairDisplaySC.className}`} 
          onClick={() => setShowKontakt(true)}
        >
          Kontakt
        </div>
      </div>
      
      {/* Lägg till Modal-komponenten i slutet av return */}
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalContent.title}
          frameImage={frameSideImage.src}
        >
          {modalContent.content}
        </Modal>
      )}

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
