import React from "react";
import Zoom from 'react-reveal/Zoom';
import SocialFollow from '../../shared/UIElements/SocialFollow';
import "./IntroItem.css"
const IntroItem = (props) => {
  return (
    <div className="section-intro">
      <div className="section-background">
        <div className="section-content" id={props.id}>
          <Zoom>
            <div className="intro-item__info">
              <h1>{props.title}</h1>
              <h2>{props.description}</h2>
              <h3>{props.description1}</h3>
            
            </div>
            <SocialFollow/>
            
          </Zoom>  
        </div>
      </div>
    </div>
  );
};

export default IntroItem;
