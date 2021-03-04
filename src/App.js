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
        
        
      </div>
    );
  }
}

export default App;