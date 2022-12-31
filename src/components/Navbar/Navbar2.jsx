import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineFullscreenExit } from 'react-icons/md';
import { FiMail } from "react-icons/fi";

import './Navbar2.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        <li className="p__new"><a href="#home">Home</a></li>
        <li className="p__new"><a href="#about">About</a></li>
        <li className="p__new"><a href="#projects">Projects</a></li>
        <li className="p__new"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineFullscreenExit className="overlay__close" fontsize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__new"><a href="/">Home</a></li>
              <li className="p__new"><a href="/Meals">About</a></li>
              <li className="p__new"><a href="/Drinks">Projects</a></li>
              <li className="p__new"><a href="/Gallery">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
