import "./navbar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-heading">
            <h2><Link to="/">The Planets</Link></h2>
          </div>
          <div className="navbar-list">
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
