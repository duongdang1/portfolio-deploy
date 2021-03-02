
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './SocialFollow.css';
const SocialFollow = () => {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/profile.php?id=100010703880773" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
            <a href="https://www.instagram.com/dmvdang_/?hl=vi" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
            <a href="https://github.com/duongdang1?tab=repositories" className="github social"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            <a href="https://www.linkedin.com/in/dang-duong-90b069195/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
        </div>
        
    )
}
export default SocialFollow;