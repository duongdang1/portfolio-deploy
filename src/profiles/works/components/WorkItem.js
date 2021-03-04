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
          <div className="work-tab-item">
          
            <div className="first-work">
              <h1>Student Technician at ITS - Learning Environment, Union College</h1>
              <li> - Set up and manage technology devices for on campus events. </li>
              <li> - Assist students and faculties with issues related to technology around campus. </li>
              <li> - Plan and perform multiple time-critical tasks</li>
              <li> - Maintaining equipment in campus storage caches</li>
            </div>
            <div className="second-work">
              <h1>Student Technician at Ustar, Union College</h1>
              <li> - Diagnose and assist with correction of operating system and general software problems including, but not limited to corrupt files, viruses, adware, etc.</li>
              <li> - Assist with general on-campus network connection issues</li>
              <li> - Some hardware diagnostics and minor repairs</li>
            </div>
            <div className="third-work">
              <h1>Teacher at mindX</h1>
              <li> - Teach Computer Science to highschool student </li>
              <li> - Class I teach:</li>
              <li> - C4T - Python: Students learn the fundamentals of programming through Python. Students will then develop their own application.</li>  
            </div>
         
        </div>
          <div className="tab">
            <TabProject/>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default WorkItem;
