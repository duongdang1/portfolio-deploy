
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin,
    
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../shared/UIElements/Button';
import Modal from '../../shared/UIElements/Modal';
import './SocialFollow.css';

const SocialFollow = () => {
    const [showDetail, setShowDetail] = useState(false);

    const openDetailHandler = () => setShowDetail(true);

    const closeDetailHandler = () => setShowDetail(false);
    return (
        <div className="wrap">
            <div className="social-container">
                <a href="https://www.facebook.com/profile.php?id=100010703880773" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                <a href="https://www.instagram.com/dmvdang_/?hl=vi" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
                <a href="https://github.com/duongdang1?tab=repositories" className="github social"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                <a href="https://www.linkedin.com/in/dang-duong-90b069195/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                <Button inverse onClick={openDetailHandler}>
                    email and phone number
                </Button>
            </div>
            <Modal
                show={showDetail}
                onCancel={closeDetailHandler}
                footer={<Button onClick={closeDetailHandler}>Close </Button>}
                >
                <div>
                    <h4>duongminhvietdang@gmail.com</h4>
                    <h4>+84563038179</h4>
                </div>
            </Modal>
        </div>
    )
}
export default SocialFollow;