'use client';

import Image from 'next/image';
import styles from './Ommig.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import ommigImage from '../../../assets/images/ommig-img/ommig.jpeg';
import { playfairDisplaySC, amaticSC } from '../../fonts';

interface OmmigProps {
  onClose: () => void;
}

export default function Ommig({ onClose }: OmmigProps) {
  return (
    <div className={styles.ommigContainer} onClick={onClose}>
      <div 
        className={styles.ommigContent}
        onClick={e => e.stopPropagation()}
        style={{ '--frame-image': `url(${frameSideImage.src})` } as React.CSSProperties}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.ommigHeader}>
          <h2 className={`${playfairDisplaySC.className}`}>Om Mig</h2>
        </div>
        <div className={styles.ommigBody}>
          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Välkommen till Success Klipp och Trim</h3>
            <p>
              Jag heter [Ditt Namn] och är en certifierad hundtrimmare med många års erfarenhet 
              inom hundfrisering och pälsvård. Min passion är att ta hand om hundar och 
              se till att de känner sig bekväma och trygga under sina behandlingar.
            </p>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.ommigImage} 
                src={ommigImage} 
                alt="om mig bild"
                width={400}
                height={300}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Min Erfarenhet</h3>
            <p>
              Med över [X] års erfarenhet i branschen har jag utvecklat en djup förståelse 
              för olika hundrasers specifika behov och pälstyper. Jag arbetar kontinuerligt 
              med att hålla mig uppdaterad om de senaste teknikerna och metoderna inom hundfrisering.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Min Filosofi</h3>
            <p>
              På Success Klipp och Trim tror vi på att varje hund är unik och förtjänar 
              individuell uppmärksamhet. Vi strävar efter att skapa en lugn och trygg miljö 
              där din hund kan känna sig avslappnad under behandlingen.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Utbildning och Certifieringar</h3>
            <ul className={styles.certList}>
              <li>Certifierad hundtrimmare</li>
              <li>Specialiserad i olika klipptekniker</li>
              <li>Expertis inom pälsvård och hundskötsel</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
