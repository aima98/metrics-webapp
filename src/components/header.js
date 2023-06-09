import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="head-details flex">
      <div className="logo pd-two flex">
        <div className="logo-detail flex">
          <span className="back">
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => handleClick()} />
            <span className="back-txt white">Home</span>
          </span>
        </div>
        <div className="heading">
          <span className="white">Cryptos</span>
        </div>
      </div>
      <div className="right-side flex">
        <span className="audio"><i className="fa fa-microphone" aria-hidden="true" /></span>
        <span className="settings">
          <i className="fa fa-cog" aria-hidden="true" />
        </span>
      </div>
    </header>
  );
}

export default Header;
