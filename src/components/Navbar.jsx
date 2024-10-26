import logo from "../assets/logo.png";
import coin_logo from "../assets/dollar 1.png";
import { useState } from "react";

const Navbar = ({ coin }) => {
  return (
    <header>
      <nav className="container wrapper">
        <a href="../../index.html">
          <img src={logo} alt="logo" />
        </a>
        <div className="wrapper">
          <ul className="menu">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <div className="wrapper coin_box">
            <span>{coin} Coin</span>
            <img src={coin_logo} alt="coin" />
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
