import "./navbar.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {

  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setHamburgerActive(!hamburgerActive);
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleMobileViewActive = {
    display: ((hamburgerActive && width <= 600) || (width > 600)) ? "block" : "none",
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (width > 600) setHamburgerActive(false);
  }, [hamburgerActive, width])

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-heading">
            <h2><Link to="/">The Planets</Link></h2>
            <GiHamburgerMenu id="navbar-icon" onClick={handleClick}/>
          </div>
          <div className="navbar-list" style={toggleMobileViewActive}>
            <ul>
              <li><Link to="/mercury">Mercury</Link></li>
              <li><Link to="/venus">Venus</Link></li>
              <li><Link to="/earth">Earth</Link></li>
              <li><Link to="/mars">Mars</Link></li>
              <li><Link to="/jupiter">Jupiter</Link></li>
              <li><Link to="/saturn">Saturn</Link></li>
              <li><Link to="/uranus">Uranus</Link></li>
              <li><Link to="/neptune">Neptune</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
