'use client';

import styles from './Behandlingar.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import { useState, useEffect } from 'react';

interface BehandlingarProps {
  onClose: () => void;
}

export default function Behandlingar({ onClose }: BehandlingarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    
    handleResize(); // Kör direkt för initial check
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.behandlingarContainer} onClick={onClose}>
      <div 
        className={`${styles.behandlingarContent} ${isMounted && isMobile ? styles.mobile : ''}`}
        onClick={e => e.stopPropagation()}
        style={{ '--frame-image': `url(${frameSideImage.src})` } as React.CSSProperties}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={`${styles.behandlingarHeader} ${playfairDisplaySC.className}`}>
          <h2>Behandlingar</h2>
        </div>
        <div className={styles.behandlingarBody}>
          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Klippning</h3>
            <div className={styles.behandling}>
              <span>Klippning XS-S</span>
              <div className={styles.info}>
                <span>fr 660 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Klippning M-L</span>
              <div className={styles.info}>
                  <span>fr 680 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Klippning XL</span>
              <div className={styles.info}>
                <span>fr 730 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Valp intro</span>
              <div className={styles.info}>
                <span>fr 660 kr</span>
              </div>
            </div>
          </section>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Fällnings behandling</h3>
            <div className={styles.behandling}>
              <span>Fällnings behandling XS-S</span>
              <div className={styles.info}>
                <span>fr 660 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Fällnings behandling M-L</span>
              <div className={styles.info}>
                <span>fr 680 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Fällnings behandling XL</span>
              <div className={styles.info}>
                <span>fr 730 kr</span>
              </div>
            </div>
          </section>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Drop In Kloklipp, puts och analtömning</h3>
            <div className={styles.behandling}>
              <span>Kloklipp</span>
              <div className={styles.info}>
                <span>185 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Analtömning</span>
              <div className={styles.info}>
                <span>199 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Puts</span>
              <div className={styles.info}>
                <span>275 kr</span>
              </div>
            </div>
          </section>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>SPA behandling</h3>
            <div className={styles.behandling}>
              <span>Spa XS-S</span>
              <div className={styles.info}>
                <span>fr 660 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Spa M-L</span>
              <div className={styles.info}>
                <span>fr 680 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Spa XL</span>
              <div className={styles.info}>
                <span>fr 730 kr</span>
              </div>
            </div>
          </section>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Kloklipp, puts, öronplock och analtömning</h3>
            <div className={styles.behandling}>
              <span>Kloklipp bokning</span>
              <div className={styles.info}>
                <span>255 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Puts bokning</span>
              <div className={styles.info}>
                <span>355 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Anal tömning bokning</span>
              <div className={styles.info}>
                <span>250 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Öronplock bokning</span>
              <div className={styles.info}>
                <span>250 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>+ Öron plock</span>
              <div className={styles.info}>
                <span>100 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>+ Anal tömning</span>
              <div className={styles.info}>
                <span>70 kr</span>
              </div>
            </div>
          </section>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Trimning</h3>
            <div className={styles.behandling}>
              <span>Trimning XS-S</span>
              <div className={styles.info}>
                <span>fr 660 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Trimning M-L</span>
              <div className={styles.info}>
                <span>fr 680 kr</span>
              </div>
            </div>
            <div className={styles.behandling}>
              <span>Trimning XL</span>
              <div className={styles.info}>
                <span>fr 730 kr</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
