/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Link from 'next/link';
import DataContext from '../store/GlobalContext';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  const [state, dispatch] = useContext(DataContext);
  const { authentication } = state;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">
          <i className="fas fa-utensils" aria-hidden="true"></i>
        </a>
      </Link>
      <div className="navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {authentication.length > 0 && (
            <li className="nav-item">
              <Link href="/favorites">
                <a className="nav-link">
                  <i className="fab fa-gratipay " justif aria-hidden="true">
                    Favorites
                  </i>
                </a>
              </Link>
            </li>
          )}
          {authentication.length === 0 ? (
            <li className="nav-item">
              <Link href="/signin">
                <a className="nav-link">
                  <i className="fas fa-user" aria-hidden="true">
                    Sign In
                  </i>
                </a>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/signin">
                <a className="nav-link">
                  <i className="fas fa-user" aria-hidden="true">
                    Sign Out
                  </i>
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
