'use client';

import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';

// Dynamiskt importera Leaflet för att undvika server-side rendering-problem
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
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    
    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      
      // Konfigurera Leaflet-ikoner dynamiskt
      import('leaflet').then(L => {
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
      });
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.kontaktContainer} onClick={onClose}>
      <div 
        className={`${styles.kontaktContent} ${isMounted && isMobile ? styles.mobile : ''}`}
        onClick={e => e.stopPropagation()}
        style={{ '--frame-image': `url(${frameSideImage.src})` } as React.CSSProperties}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={`${styles.kontaktHeader} ${playfairDisplaySC.className}`}>
          <h2>Kontakt</h2>
        </div>
        <div className={styles.kontaktBody}>
          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Kontaktinformation</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>E-post</h4>
                <p>successklippochtrim@gmail.com</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Adress</h4>
                <p>Success Klipp och Trim<br />Kännavägen 11<br />34131 Ljungby</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Telefon</h4>
                <p onClick={() => window.location.href = 'tel:+46793117616'} style={{ cursor: 'pointer' }}>0793-117616</p>
              </div>
            </div>
            {isMounted && (
              <div className={styles.mapContainer}>
                {showMap ? (
                  <MapContainer 
                    center={position} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>
                        <div style={{ textAlign: 'center' }}>
                          <span style={{ textDecoration: 'underline', fontFamily: playfairDisplaySC.style.fontFamily, marginBottom: '8px', display: 'block' }}>Success Klipp och Trim</span>
                          <span style={{ marginBottom: '8px', display: 'block' }}>Kännavägen 11, 34131 Ljungby</span>
                          <button 
                            onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Kännavägen+11,+34131+Ljungby', '_blank')}
                            style={{
                              backgroundColor: '#4a4a4a',
                              color: '#f5f2f4',
                              border: 'none',
                              padding: '8px 12px',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              marginTop: '8px',
                              fontSize: '14px'
                            }}
                          >
                            Vägbeskrivning
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <button 
                    className={styles.mapToggle}
                    onClick={() => setShowMap(true)}
                  >
                    Visa karta
                  </button>
                )}
              </div>
            )}
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
                <span className={styles.dropInInfo}>(15:00 - 17:00 Drop in kloklipp & puts ord. pris)</span>
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
                <span className={styles.dropInInfo}>(Drop in kloklipp & puts ord. pris)</span>
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
                <span className={styles.dropInInfo}>(Drop in kloklipp & puts)</span>
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
            <p className={styles.bookingInfo}>
              För att boka en tid, kontakta oss via telefon eller e-post. Vi kommer att hjälpa dig att hitta en lämplig tid som 
              passar både dig och din hund.
            </p>
            <br />
            <p className={styles.bookingInfo}>
              <strong className={styles.bookingInfoTitle}>Inför ditt besök:</strong><br />
              För att besöket ska bli så tryggt och behagligt som möjligt – kom ihåg att rasta din hund ordentligt innan ni 
              kommer. Om din hund nyligen har varit hos veterinär eller har några särskilda behov, som exempelvis allergier, 
              ledbesvär eller andra hälsoproblem, är jag tacksam om du meddelar mig det i förväg.
            </p>
            <br />
            <p className={styles.bookingInfo}>
              <strong className={styles.bookingInfoTitle}>Om du behöver avboka eller blir sen:</strong><br />
              Behöver du avboka? Inga problem – gör det gärna senast 24 timmar innan bokad tid för att undvika en avgift. 
              Vid senare avbokning tas en halv kostnad ut. Om du skulle bli mer än 15 minuter sen utan att höra av dig, 
              räknas tiden som uteblivet besök och hela beloppet debiteras.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
