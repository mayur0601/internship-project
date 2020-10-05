import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import "../assets/css/Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            La Crescendo
            {/* <i class="fab fa-typo3" /> */}
            {/* <img src="/piano recitals.jpg" className="header_logo" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/achivements"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                achivements
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/lessons"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                lessons
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/contact">
              <Button buttonStyle="btn--outline">Contact us</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
