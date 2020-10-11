import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";

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
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            La Crescendo
            {/* <i class="fab fa-typo3" /> */}
            {/* <img src="/piano recitals.jpg" className="header_logo" /> */}
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links" onClick={closeMobileMenu}>
                About us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/achivements"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                achivements
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/lessons"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                lessons
              </a>
            </li>

            <li>
              <a
                href="mailto:laacrescendo@gmail.com?cc=laacrescendo@gmail.com&subject=Enquiry"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact us
              </a>
            </li>
          </ul>
          {button && (
            <a href="mailto:laacrescendo@gmail.com?cc=laacrescendo@gmail.com&subject=Enquiry">
              <button type="button" className="btn btn-dark contact_button">
                contact us
              </button>
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
