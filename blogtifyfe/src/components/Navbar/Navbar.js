import React from 'react';
import { FaFacebook, FaHome, FaTv, FaUsers, FaStore, FaGamepad, FaBell, FaCaretDown, FaTh } from 'react-icons/fa';
import './Navbar.scss'; 

const Navbar = () => {
  const handleIconClick = (iconName) => {
    console.log(`${iconName} clicked`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between navheader-container">
      <div className="d-flex align-items-center">
      <div className="logo">
            <FaFacebook size={32} />
            <input type="text" placeholder="Tìm kiếm trên Facebook" />
          </div>
      </div>

      <div className="navbar-icons d-flex">
        <div className="nav-icon active" onClick={() => handleIconClick('Home')}>
          <FaHome size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('TV')}>
          <FaTv size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('Store')}>
          <FaStore size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('Users')}>
          <FaUsers size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('Gamepad')}>
          <FaGamepad size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('Apps')}>
          <FaTh size={25} />
        </div>
      </div>

      <div className="navbar-icons d-flex">
        <div className="nav-icon" onClick={() => handleIconClick('Notifications')}>
          <FaBell size={25} />
        </div>
        <div className="nav-icon" onClick={() => handleIconClick('Settings')}>
          <FaCaretDown size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
