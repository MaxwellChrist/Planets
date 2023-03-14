import "./navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCircleFill } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleMobileViewActiveNavbar = {
    borderBottom: (!hamburgerActive && width <= 600) || width > 600 ? "1px solid rgba(151, 151, 151, 0.2)" : "unset",
  };

  const toggleMobileViewActiveNavbarList = {
    display:
      (hamburgerActive && width <= 600) || width > 600 ? "block" : "none",
      borderTop: hamburgerActive && width <= 600 ? "1px solid rgba(151, 151, 151, 0.2)" : "unset",
  };


  const toggleMobileViewActiveSVG = {
    display: hamburgerActive && width <= 600 ? "inline" : "none",
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (width > 600) setHamburgerActive(false);
  }, [hamburgerActive, width]);

  return (
    <>
      <header>
        <nav className="navbar" style={toggleMobileViewActiveNavbar}>
          <div className="navbar-heading">
            <h2>
              <Link to="/">The Planets</Link>
            </h2>
            <GiHamburgerMenu id="navbar-icon" onClick={handleClick} />
          </div>
          <div className="navbar-list" style={toggleMobileViewActiveNavbarList}>
            <ul>
              <li>
                <BsFillCircleFill id="mercury" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/mercury">Mercury</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="venus" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/venus">Venus</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="earth" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/earth">Earth</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="mars" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/mars">Mars</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="jupiter" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/jupiter">Jupiter</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="saturn" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/saturn">Saturn</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="uranus" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/uranus">Uranus</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
              <li>
                <BsFillCircleFill id="neptune" className="svgCircle" style={toggleMobileViewActiveSVG} />
                <Link to="/neptune">Neptune</Link>
                <SlArrowRight className="svgArrow" style={toggleMobileViewActiveSVG} />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
