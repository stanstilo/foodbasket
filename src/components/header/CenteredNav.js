import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { NavLink, withRouter } from "react-router-dom";
import CartDropDown from "./cartDrop";
import CartIcon from "./cartIcon";
import { openNav, closeNav } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropDown from "./UserDropDown";
import soupeLogo from '../../assets/images/soupe-logo.jpeg'
import { Button } from '@material-ui/core';
import "./styles/center-nav.scss";



const LogoHeader = ({ history, isAuthenticated }) => {
  //cart button at the top left used for opening  sidebar and closing
  var buttons = (
    <button
      onClick={() => {
        openNav();
        setbutton(
          (buttons = (
            <button
              onClick={() => {
                closeNav();
                setbutton(button);
              }}
            >
              x
            </button>
          ))
        );
      }}
    >
      &#9776;
    </button>
  );
  const [button, setbutton] = useState(buttons);
  const [open, setOpen] = useState(false);
  const [cartHidden, setCartHidden] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const handleCartHidden = () => {
    setCartHidden((prev) => !prev);
  };

  const handleCartHiddenAway = () => {
    setCartHidden(false);
  };

  return (
    <>
      <div className="center-nav" id="myheader">
        <span className='centernav-menu-left d-flex'>
        <div className="carticon">{<button onClick={openNav}>&#9776;</button>}</div>
        <NavLink to="/">    
            <img src={soupeLogo} style={{width:'180px', height:'80px'}} alt='soupe logo' />    
        </NavLink>
        
        <div className="menu-button">{button}</div>
        
        <div className='search-container'>
          <input type="text" className="centernav-searchInput" placeholder="Search for Produts" />
          <span className="searchicon-section">
            <SearchIcon  />
            </span>
        </div>
        </span>

        <div className='centernav-menu-right d-flex'>
          <div className='seperator px-3 pt-4'>
            <Button className='center-buttons-green'><NavLink className='nav-link' to='/food-calculator'>Food Calculator</NavLink></Button>
          </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            {isAuthenticated ? (
              <FontAwesomeIcon icon="user" className="header-icon" onClick={handleClick} />
            ) : (
              <FontAwesomeIcon icon="user" className="header-icon" onClick={handleClick} />
            )}
            {open ? <UserDropDown handleClickAway={handleClickAway} /> : null}
          </div>
        </ClickAwayListener>

        <ClickAwayListener onClickAway={handleCartHiddenAway}>
          <div>
            <CartIcon handleCartHidden={handleCartHidden} />
            {cartHidden ? <CartDropDown handleCartHidden={handleCartHidden} /> : null}
          </div>
        </ClickAwayListener>
      </div>
      </div>
    </>
  );
};


export default withRouter(LogoHeader);
