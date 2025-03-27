'use client';

import Image from 'next/image';
import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';

interface KontaktProps {
  onClose: () => void;
}

export default function Kontakt({ onClose }: KontaktProps) {
  return (
    <div className={styles.kontaktContainer} onClick={onClose}>
      <div 
        className={styles.kontaktContent}
        onClick={e => e.stopPropagation()}
        style={{ '--frame-image': `url(${frameSideImage.src})` } as React.CSSProperties}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.kontaktHeader}>
          <h2>Kontakt</h2>
        </div>
        <div className={styles.kontaktBody}>
          <section className={styles.section}>
            <h3>Kontaktinformation</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>Adress</h4>
                <p>Success Klipp och Trim</p>
                <p>[Din Gatuadress]</p>
                <p>[Postnummer] [Stad]</p>
              </div>

              <div className={styles.contactItem}>
                <h4>Telefon</h4>
                <p>[Ditt telefonnummer]</p>
              </div>

              <div className={styles.contactItem}>
                <h4>E-post</h4>
                <p>[Din e-postadress]</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3>Öppettider</h3>
            <div className={styles.openingHours}>
              <div className={styles.dayTime}>
                <span>Måndag - Fredag</span>
                <span>09:00 - 17:00</span>
              </div>
              <div className={styles.dayTime}>
                <span>Lördag</span>
                <span>10:00 - 15:00</span>
              </div>
              <div className={styles.dayTime}>
                <span>Söndag</span>
                <span>Stängt</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3>Hitta hit</h3>
            <p className={styles.directions}>
              Vi finns centralt belägna med goda parkeringsmöjligheter. 
              Lokalen är handikappanpassad och lätt att hitta till.
            </p>
          </section>

          <section className={styles.section}>
            <h3>Bokning</h3>
            <p className={styles.booking}>
              Boka tid genom att ringa eller skicka e-post. 
              Vi återkommer så snart som möjligt för att bekräfta din bokning.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
