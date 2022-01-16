import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">
          <i className="fas fa-utensils" aria-hidden="true"></i>
        </a>
      </Link>
      <div className="navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/favorites">
              <a className="nav-link">
                <i className="fab fa-gratipay " justif aria-hidden="true">
                  Favorites
                </i>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signin">
              <a className="nav-link">
                <i className="fas fa-user" aria-hidden="true">
                  Sign In
                </i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
