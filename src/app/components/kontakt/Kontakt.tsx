'use client';

import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface KontaktProps {
  onClose: () => void;
}

export default function Kontakt({ onClose }: KontaktProps) {
  const position: LatLngExpression = [56.8333, 13.9333];
  const [isMounted, setIsMounted] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.kontaktContainer} onClick={onClose}>
      <div 
        className={`${styles.kontaktContent} ${isMobile ? styles.mobile : ''}`}
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
                <p>0793-117616</p>
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
                <button 
                  className={styles.mapToggle}
                  onClick={() => setShowMap(!showMap)}
                >
                  {showMap ? 'Dölj karta' : 'Visa karta'}
                </button>
                {isMounted && showMap && (
                  <div className={styles.mapContainer}>
                    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      />
                      <Marker position={position}>
                        <Popup>
                          Success Klipp och Trim
                          <br />
                          <a href="https://www.google.com/maps/dir/?api=1&destination=56.8333,13.9333" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className={styles.directions}>
                            Vägbeskrivning
                          </a>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Öppettider</h3>
            <div className={styles.openingHours}>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Måndag</span>
                  <span>12:00 - 18:00</span>
                </div>
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Tisdag</span>
                  <span>12:00 - 17:00</span>
                  </div>
                  <span className={styles.dropIn}>(15:00 - 17:00 Drop in kloklipp & puts ord. pris)</span>
                
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Onsdag</span>
                  <span>12:00 - 19:00</span>
                </div>
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Torsdag</span>
                  <span>12:00 - 13:30</span>
                  </div>
                  <span className={styles.dropIn}>(Drop in kloklipp & puts ord. pris)</span>
                
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Fredag</span>
                  <span>Stängt</span>
                </div>
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Lördag</span>
                  <span>10:00 - 14:00</span>
                  </div>
                  <span className={styles.dropIn}>(Drop in kloklipp & puts)</span>
                
              </div>
                  <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Söndag</span>
                  <span>Stängt</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Bokning</h3>
            <p className={styles.bokning}>
              För att boka en tid, kontakta oss via telefon eller e-post. Vi kommer att hjälpa dig att hitta en lämplig tid 
              som passar både dig och din hund.
            </p>
            <br />
            <div className={styles.införbokning}>
              <h4>Inför ditt besök:</h4>
              <p>För att besöket ska bli så tryggt och behagligt som möjligt – kom ihåg att rasta din hund ordentligt innan ni kommer. Om din hund nyligen har varit hos veterinär eller har några särskilda behov, som exempelvis allergier, ledbesvär eller andra hälsoproblem, är jag tacksam om du meddelar mig det i förväg.</p>
              <br />
              <h4>Om du behöver avboka eller blir sen:</h4>
              <p>Behöver du avboka? Inga problem – gör det gärna senast 24 timmar innan bokad tid för att undvika en avgift. Vid senare avbokning tas en halv kostnad ut. Om du skulle bli mer än 15 minuter sen utan att höra av dig, räknas tiden som uteblivet besök och hela beloppet debiteras.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
