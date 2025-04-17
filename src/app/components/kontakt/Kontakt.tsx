'use client';

import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

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
        <div className={`${styles.kontaktHeader} ${playfairDisplaySC.className}`}>
          <h2>Kontakt</h2>
        </div>
        <div className={styles.kontaktBody}>
          <section className={styles.section}>
            <h3 className={`${amaticSC.className}`}>Kontaktinformation</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h4>Adress</h4>
                <p>Hundgatan 123<br />123 45 Stockholm</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Telefon</h4>
                <p>08-123 45 67</p>
              </div>
              <div className={styles.contactItem}>
                <h4>E-post</h4>
                <p>info@hundklippning.se</p>
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
                        Success Klipp och Trim
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
                  <span>Måndag - Fredag</span>
                  <span>09:00 - 17:00</span>
                </div>
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Lördag</span>
                  <span>10:00 - 15:00</span>
                </div>
              </div>
              <div className={styles.dayTime}>
                <div className={styles.dayTimeText}>
                  <span>Söndag</span>
                  <span>Stängt</span>
                </div>
              </div>
              <p className={styles.dropIn}>Drop-in: Måndag - Fredag 09:00 - 16:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
