import React  from 'react';
import './Header.css';
//import { Link } from 'react-router-dom';
function Header() {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">Tauhidul</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href='/' className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href='/' className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}


export default Header;
