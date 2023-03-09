import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-heading">
            <h2>The Planets</h2>
        </div>
        <div className="navbar-list">
            <ul>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus</li>
                <li>Neptune</li>
            </ul>
        </div>
      </nav>
    </>
  );
}
