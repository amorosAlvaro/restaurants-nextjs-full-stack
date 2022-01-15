import React from 'react';
import NavBar from './NavBar';
import Notification from './Notification';

function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />
      <Notification />
      {children}
    </div>
  );
}

export default Layout;
