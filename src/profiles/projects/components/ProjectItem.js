import React, { useState } from "react";

import Modal from "../../shared/UIElements/Modal";
import "./ProjectItem.css";
import Button from '../../shared/UIElements/Button';
//import TabProjectList from './TabProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
    faBookmark,
    faFileCode,
} from '@fortawesome/free-regular-svg-icons';
import Zoom from 'react-reveal/Zoom';
import '../../shared/UIElements/SocialFollow.css';
const ProjectItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const openDetailHandler = () => setShowDetail(true);

  const closeDetailHandler = () => setShowDetail(false);

  return (
    <div className="project-section-content" id={props.id}>
      <Zoom>
        <div className="title-style">
            <h1>Here are some of my projects</h1>
        </div>
        
        <div className="project-intro-item__info">
          
          <div className="project-info-1">
            
            <div className="modalImage">
              <img
                src="https://i.ibb.co/ncy2zMJ/Screenshot-2021-03-01-163118.png"
                alt="modal pic"
              />
            </div>
            <div className="modalText">
            
              <h1>Feature Project</h1>
              <h3>Texas Holdem Poker stimulator</h3>
          
              <h2>{props.description}</h2>
              
              
              <a href="https://github.com/duongdang1/Poker-stimulator" className="link social"><FontAwesomeIcon icon={faFileCode} size="2x"/></a>
            
            </div>
            
          </div>
          <div className="project-info-2">
            <div className="modalImage-2">
              <img
                src="https://i.ibb.co/tPRN3bB/Screenshot-2021-03-01-164410.png"
                alt="modal pic"
              />
            </div>
            <div className="modalText-2">
              <h1>Feature Project</h1>
              <h3>Online multiplayer TicTacToe game</h3>
              <h2>{props.details}</h2>
              <div className="project-social-container">
                <a href="https://duongdang1.github.io/projectgame/html/" className="github social"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                <a href="https://github.com/duongdang1/projectgame" className="link social"><FontAwesomeIcon icon={faFileCode} size="2x"/></a>
              </div>
              <Button inverse onClick={openDetailHandler}>
                use this credential to sign in
              </Button>
            </div>
            
          </div>


          
          <Modal
            show={showDetail}
            onCancel={closeDetailHandler}
            footer={<Button onClick={closeDetailHandler}>Close </Button>}
          >
            <div>
              <h4>{props.detail}</h4>
            </div>
          </Modal>

          {/* <TabProjectList/> */}
        </div>
      </Zoom>
    </div>
  );
};

export default ProjectItem;
