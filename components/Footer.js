'use client';
import Link from 'next/link';
import { useState } from 'react';

import { footerIcons, emailAddress, createFontAwesomeIcon } from '../public/staticText';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// Todo: Refactor all the module styles
import footerStyles from '../styles/Footer.module.css';

const IconLink = ({ iconDetails, lightTheme }) => {
  const { icon, link, target, ariaLabel } = iconDetails;
  const [showTooltip, setShowTooltip] = useState(false);
  if (iconDetails.icon === faEnvelope) {
    const handleCopy = async () => {
      await navigator.clipboard.writeText(emailAddress);
      setShowTooltip(true);

      // Disappear after 3 seconds
      setTimeout(() => setShowTooltip(false), 3000);
    };

    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <style>
          {`
          @keyframes popOut {
            0% { opacity: 0; transform: translateX(-50%) scale(0.9); }
            10% { opacity: 1; transform: translateX(-50%) scale(1); }
            90% { opacity: 1; transform: translateX(-50%) scale(1); }
            100% { opacity: 0; transform: translateX(-50%) scale(1.1); }
          }
          .tooltip-animation {
            animation: popOut .75s ease-in-out forwards;
          }
        `}
        </style>
        {showTooltip && (
          <div className="tooltip-animation"
            style={{
              position: 'absolute',
              bottom: '140%',
              left: '50%',
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: '1px solid #000000',
              padding: '2px 8px',
              borderRadius: '0px',
              fontSize: '11px',
              fontFamily: 'monospace',
              textTransform: 'lowercase',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              zIndex: 10,
              pointerEvents: 'none' // Ensures the tooltip doesn't interfere with clicks
            }}>
            email copied
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              marginLeft: '-5px',
              borderWidth: '5px',
              borderStyle: 'solid',
              borderColor: '#333 transparent transparent transparent'
            }} />
          </div>
        )}
        <div style={{ cursor: 'pointer', display: "flex", alignContent: "center", justifyContent: "center" }} onClick={handleCopy}>
          {createFontAwesomeIcon(icon)}
        </div>
      </div>
    );
  }
  return (
    <Link className={lightTheme ? '' : 'dark'} href={`${link}`} aria-label={ariaLabel} target={target && target} rel='noreferrer'>
      {createFontAwesomeIcon(icon)}
    </Link>
  )
}

const Footer = ({ lightTheme }) => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.icon_menu}>
        {footerIcons.map((iconDetails, i) => <IconLink key={i} iconDetails={iconDetails} lightTheme={lightTheme} />)}
      </div>
    </footer>
  );
};

export default Footer;