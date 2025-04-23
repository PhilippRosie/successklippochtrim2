import React from 'react';
import styles from './CookiePopup.module.css';

interface CookiePopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookiePopup: React.FC<CookiePopupProps> = ({ onAccept, onDecline }) => {
  return (
    <div className={styles.cookiePopup}>
      <p>Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda vår webbplats godkänner du vår användning av cookies.</p>
      <div className={styles.cookieButtons}>
        <button onClick={onAccept}>Acceptera</button>
        <button onClick={onDecline}>Acceptera Inte</button>
      </div>
    </div>
  );
};

export default CookiePopup; 