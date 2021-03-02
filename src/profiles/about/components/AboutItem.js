import React from "react";
import Zoom from 'react-reveal/Zoom';
import "./AboutItem.css"
const AboutItem = (props) => {
  return (
    <div className="section-about">
      <div className="section-background">
        <div className="section-content-about" id={props.id}>
          <Zoom>
            <div className="about-item__info">
              <h1>{props.title}</h1>
                <div className="about-info">
                  <div className="info">
                    <h2>{props.description}</h2>
                    <h3>{props.description1}</h3>
                    <h4>{props.status}</h4>
                    
                    <p>- Java</p>
                    <p>- Javascript (ES6+)</p>
                    <p>- ReactJS</p>
                    <p>- NodeJS</p>
                    <p>- Firebase</p>
                    <p>- Python</p>
                  </div>
                  <div className="image">
                    <img src={props.image} alt={props.title} />
                  </div>
                  
                </div>
              
          
            </div>
          </Zoom>   

            
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
