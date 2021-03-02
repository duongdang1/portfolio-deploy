import React, { useState } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";

// import "../../../../node_modules/react-tabs/style/react-tabs.css"
import './TabProjectList.css';
const TabProjectList = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1");

  /**
   * Place a `ThemeProvider` at the root of your React application
   */
  return (
    <ThemeProvider>
      
        <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
          <div className="Tabs">
            <TabList>
              <div className="tab-list">
                <Tab item="tab-1">Poker Stimulator</Tab>
                <Tab item="tab-2">Online Tic Tac Toe</Tab>

                <Tab item="tab-3">Tab 3</Tab>
              </div>
            </TabList>
              <div className="tab-item">
                <TabPanel item="tab-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TabPanel>
                <TabPanel item="tab-2">Tab 2 content</TabPanel>
                <TabPanel item="tab-3">Tab 3 content</TabPanel>
              </div>
          
          
          
          </div>
        </Tabs>
      
    </ThemeProvider>
  );
};

export default TabProjectList;