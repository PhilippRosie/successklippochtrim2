'use client';

import Image from 'next/image';
import styles from './Ommig.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import ommigImage from '../../../assets/images/ommig-img/ommig.jpeg';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import { useState, useEffect } from 'react';

interface OmmigProps {
  onClose: () => void;
}

export default function Ommig({ onClose }: OmmigProps) {
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
    <div className={styles.ommigContainer} onClick={onClose}>
      <div 
        className={`${styles.ommigContent} ${isMounted && isMobile ? styles.mobile : ''}`}
        onClick={e => e.stopPropagation()}
        style={{ '--frame-image': `url(${frameSideImage.src})` } as React.CSSProperties}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={`${styles.ommigHeader} ${playfairDisplaySC.className}`}>
          <h2>Om mig</h2>
        </div>
        <div className={styles.ommigBody}>
          <section className={styles.section}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.ommigImage} 
                src={ommigImage} 
                alt="Nathalie Olsson - Success Klipp och Trim"
                width={400}
                height={300}
              />
            </div>
            <h3 className={`${amaticSC.className}`}>Välkommen till Success Klipp och Trim</h3>
            <p className={styles.ommigText}>
              Jag heter Nathalie Olsson, 36 år, och är hjärtat bakom Success Klipp och Trim – en hundfrisörsalong 
              med fokus på kvalitet, trygghet och kärlek till varje enskild hund. Jag bor i Bolmen, strax utanför 
              Ljungby, tillsammans med min man Johan, våra tvillingdöttrar Wilma och Wilda, vår Cane Corso Atlaz 
              och katterna Tussan och Doris.
            </p>
            <p className={styles.ommigText}>
            Hos mig ska du alltid känna dig sedd, välkommen och trygg. Målet? Att din hund ska lämna salongen glad, stolt och skinande fin – och att du som ägare känner: “Här vill jag komma tillbaka.”
            </p>
            <br />
          </section>

          <div className={styles.divider}></div>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Min Resa</h3>
            <p className={styles.ommigText}>
              Min kärlek till hundar började tidigt. Redan som 10-åring fick jag min första hund, Cherie – en 
              Bichon Frisé – och där väcktes en passion som följt mig genom livet. Genom åren har jag haft flera 
              hundar och lärt mig massor: allt från Bichon, Schäfer till Border/Golden-mix. Hundar är min vardag, 
              min glädje och min drivkraft.
            </p>
            <br />
            <p className={styles.ommigText}>
            en av mina stora inspirationskällor är Gun, en uppfödare och väldigt nära vän som tidigt lärde mig grunderna i klippning. (Gun drev ”Success kennel” där hon födde upp Bichon Frise och det är för att hedra hennes minne som jag valt att heta just ”Success Klipp och Trim”). Men livet tog mig på andra vägar ett tag – tills en dag då min barndomsvän Jennie, som jag känt sedan vi var sju, ringde och skojade:
            – Ska du inte börja utbilda dig hos mig och starta eget?
            </p>
            <br />
            <p className={styles.ommigText}>
              Och det gjorde jag. Den 3 februari 2025 föddes Success Klipp och Trim – ett drömprojekt som idag 
              vuxit till något jag är otroligt stolt över. Jennie utbildar mig fortfarande, och jag har redan 
              gått flera kurser, med fler på gång. För mig är det viktigt att hela tiden utvecklas, för att kunna 
              erbjuda den bästa möjliga servicen för din hund.
            </p>
            <br />
          </section>

          <div className={styles.divider}></div>
          <br />

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Min Vision</h3>
            <p className={styles.ommigText}>
              På Success Klipp och Trim handlar allt om kvalitet, omtanke och kärlek till detaljerna. Jag vill 
              skapa en plats där både du och din hund känner er hemma – där klippningen inte bara blir ett måste, 
              utan något positivt, tryggt och professionellt.
            </p>
            <p className={styles.ommigText}>
              Min vision är att driva en salong där kunskap möter hjärta, där varje kund får det lilla extra och 
              där hundarna lämnar med glada svansar. Välkommen till en salong som verkligen bryr sig – välkommen 
              till Success Klipp och Trim.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
