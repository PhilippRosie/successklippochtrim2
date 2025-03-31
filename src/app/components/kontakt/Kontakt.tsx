'use client';

import Image from 'next/image';
import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';

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
          <h2 className={`${playfairDisplaySC.className}`}>Kontakt</h2>
        </div>
        <div className={styles.kontaktBody}>
          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Kontaktinformation</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>Telefon</h4>
                <p>079-3117616</p>
              </div>

              <div className={styles.contactItem}>
                <h4>E-post</h4>
                <p>successklippochtrim@gmail.com</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Adress</h4>
                <p>Success Klipp och Trim</p>
                <p>Kånnavägen 11</p>
                <p>34131 Ljungby</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Öppettider</h3>
            <div className={styles.openingHours}>
              <div className={styles.dayTime}>
                <span>Måndag</span>
                <span>12:00 - 18:00</span>
              </div>
              <div className={styles.dayTime}>
                <span>Tisdag</span>
                <span>(15:00 - 17:00 Drop in kloklipp & puts ord. pris)</span>
                <span>12:00 - 17:00</span>
                
              </div>
              <div className={styles.dayTime}>
                <span>Onsdag</span>
                <span>12:00 - 19:00</span>
              </div>
              <div className={styles.dayTime}>
                <span>Torsdag</span>
                <span> (Drop in kloklipp & puts ord. pris) 12:00 - 13:30 </span>
              </div>
              <div className={styles.dayTime}>
                <span>Fredag</span>
                <span>Stängt</span>
              </div>
              <div className={styles.dayTime}>
                <span>Lördag</span>
                <span>Drop in kloklipp & puts 10:00 - 14:00</span>
              </div>
              <div className={styles.dayTime}>
                <span>Söndag</span>
                <span>Stängt</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Hitta hit</h3>
            <p className={styles.directions}>
              Vi finns centralt belägna med goda parkeringsmöjligheter. 
              Lokalen är handikappanpassad och lätt att hitta till.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Bokning</h3>
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
