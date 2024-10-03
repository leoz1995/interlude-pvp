import '../view/css/footer/icon.css';

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MidiaIcons() {
  const socialMediaLinks = [
    {
      icon: faInstagram,
      url: 'https://www.instagram.com/' + 'meu_instagram',
      iconcollor: '#E1306C',
    },
    {
      icon: faFacebook,
      url: 'https://www.facebook.com/' + 'meu_facebook',
      iconcollor: '#1877F2',
    },
    {
      icon: faWhatsapp,
      url:
        'https://api.whatsapp.com/send?phone=' +
        'meu_whatsapp_com_ddd_estado_e_pais',
      iconcollor: '#25D366',
    },
  ];

  return (
    <div id="icon">
      {socialMediaLinks.map(({ icon, url, iconcollor }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="icons"
        >
          <FontAwesomeIcon
            icon={icon}
            style={{ fontSize: '2vw', color: `${iconcollor}` }}
          />
        </a>
      ))}
    </div>
  );
}
