import React from "react";
import './WorkItem.css';
import TabProject from './TabList';
import Zoom from 'react-reveal/Zoom';
const WorkItem = (props) => {
  return (
    <div className="section-content"id={props.id}>
      <Zoom>
        <div className="intro-item__info">
          <div className="title-style">
            <h1>{props.title}</h1>
          </div>
          <TabProject/>
        </div>
      </Zoom>
    </div>
  );
};

export default WorkItem;
