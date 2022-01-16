import React, { useContext } from 'react';
import Link from 'next/link';
import DataContext from '../store/GlobalContext';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

function NavBar() {
  const router = useRouter();
  const [state, dispatch] = useContext(DataContext);
  const { authentication } = state;

  const handleLogout = () => {
    Cookie.remove('user', { path: 'api/authentication/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({ type: 'AUTHENTICATE', payload: {} });
    dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
    return router.push('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">
          <i className="fas fa-utensils" aria-hidden="true"></i>
        </a>
      </Link>
      <div className="navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {Object.keys(authentication).length !== 0 && (
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
          {Object.keys(authentication).length === 0 ? (
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
                <a className="nav-link" onClick={handleLogout}>
                  <i className="fas fa-user" aria-hidden="true">
                    Log Out
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
