import React from "react";
import './Nav.css'
import logo from '../assets/logo.png';

function Nav() {
  return (
    <div className="nav__container">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className="nav__links">
        <li className="nav__list">
          <a href="/" className="nav__link link__hover-effect">
            Home
          </a>
        </li>
        <li className="nav__list">
          <a href="/" className="nav__link link__hover-effect">
            Find your movie
          </a>
        </li>
        <button className="btn__contact nav__link">Contact</button>
      </ul>
    </div>
  );
}

export default Nav;
