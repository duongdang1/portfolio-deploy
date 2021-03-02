import React, { Component } from "react";
import logo from './logo192.png';
import "./App.css";
import Navbar from "./components/Navbar";


import Work from './profiles/intro/pages/Intro';
import Intro from './profiles/works/pages/Work';
import About from './profiles/about/pages/About';
import Project from './profiles/projects/pages/Project';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Work />
        <About />
        <Intro />
        <Project />
        
        {/* <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        /> */}
        
        {/* <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        /> */}
      </div>
    );
  }
}

export default App;