import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./styles.css"

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
            <text className="nav-logo">IMOV<span className="nav-logo-span">CONTROL</span></text>
          </Link>
          
          <ul className="nav-items">  
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                A IMOVCONTROL
              </Link>
            </li>       
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ESCOLHA SEU PERFIL
              </Link>
            </li>         
            <li className="nav-item-red">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SOLICITE SEU FINANCIAMENTO
              </Link>
            </li>       
            <li className="nav-item-yellow">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ACOMPANHE AQUI
              </Link>
            </li>      
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FALE CONOSCO
              </Link>
            </li>         
          </ul>
        </div>
      </nav>
    );
  }
}
