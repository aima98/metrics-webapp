import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../img/logoCr.png';

function NavBar() {
  return (
    <header className="header flex">
      <div className="logo-header flex">
        <div className="logo flex">
          <span className="back">
            {/* <i className="fa fa-chevron-left" aria-hidden="true" /> */}
            <span className="text white"><img src={logo} alt="Logo" className="logo" /></span>
          </span>
        </div>
      </div>
      <div className="right-side flex">
        <span className="settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
}

export default NavBar;
