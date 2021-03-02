import React, { Component } from "react";
import logo from "../logo192.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

import Button from '../profiles/shared/UIElements/Button';;
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            
            <li className="nav-item">
              <Link
                activeClass="active"
                to="1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Intro
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                My works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Button>
                <a href="https://drive.google.com/file/d/1LuWipsmJWbSfwmEDPXb-cqRT4XhRDDva/view?usp=sharing">resume</a>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}