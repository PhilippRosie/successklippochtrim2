'use client';

import styles from './Kontakt.module.css';
import frameSideImage from '../../../assets/images/homepage-img/homepage-frameside.png';
import { playfairDisplaySC, amaticSC } from '../../fonts';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface KontaktProps {
  onClose: () => void;
}

export default function Kontakt({ onClose }: KontaktProps) {
  const position: LatLngExpression = [56.8333, 13.9333];

  useEffect(() => {
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

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
                <p>0793-117616</p>
              </div>

              <div className={styles.contactItem}>
                <h4>E-post</h4>
                <p>successklippochtrim@gmail.com</p>
              </div>
              <div className={styles.contactItem}>
                <div>
                <h4>Adress</h4>
                <p>Success Klipp och Trim</p>
                <p>Kånnavägen 11</p>
                <p>34131 Ljungby</p>
                </div>
                <div style={{ height: '200px', width: '100%' }}>
                  <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                      <Popup>Success Klipp och Trim</Popup>
                    </Marker>
                  </MapContainer>
                </div>
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
          
        </div>
      </div>
    </div>
  );
}
