import React, { useState } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";

import "../../../../node_modules/react-tabs/style/react-tabs.css"
import './TabList.css';
const TabProject = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1");

  /**
   * Place a `ThemeProvider` at the root of your React application
   */
  return (
    <ThemeProvider>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <TabList>
          <div className="work-tab-list">
            <Tab item="tab-1">Information Technology Service</Tab>
            <Tab item="tab-2">Ustar</Tab>

            <Tab item="tab-3">mindX</Tab>
          </div>
        </TabList>
        <div className="work-tab-item">
          <TabPanel item="tab-1">
            
              <h1>Student Technician at ITS - Learning Environment, Union College</h1>
              <li> - Set up and manage technology devices for on campus events. </li>
              <li> - Assist students and faculties with issues related to technology around campus. </li>
              <li> - Plan and perform multiple time-critical tasks</li>
              <li> - Maintaining equipment in campus storage caches</li>
          
          </TabPanel>
          <TabPanel item="tab-2">
            <h1>Student Technician at Ustar, Union College</h1>
            <li> - Diagnose and assist with correction of operating system and general software problems including, but not limited to corrupt files, viruses, adware, etc.</li>
            <li> - Assist with general on-campus network connection issues</li>
            <li> - Some hardware diagnostics and minor repairs</li>
          </TabPanel>
          <TabPanel item="tab-3">
            <h1>Teacher at mindX</h1>
            <li> - Teach Computer Science to highschool student </li>
            <li> - Class I teach:</li>
            <li> - C4T - Python: Students learn the fundamentals of programming through Python. Students will then develop their own application.</li>
          </TabPanel>
        </div>
        
      </Tabs>
    </ThemeProvider>
  );
};

export default TabProject;
