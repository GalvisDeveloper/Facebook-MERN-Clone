import React from "react";
import "./index.css";

import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv'; 
import SearchIcon from "@material-ui/icons/Search";
import StorefrontIcon from '@material-ui/icons/Storefront';

const Header = () => {
  return (
    <div className="header">
      <div className="header__leftsection">
        <div className="header__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
            alt="Facebook logo"
          />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search in Facebook" type="text" />
        </div>
      </div>

      <div className="header__midsection">
        <div className="header__mid__option">
          <HomeIcon />
        </div>
        <div className="header__mid__option">
          <LiveTvIcon />
        </div>
        <div className="header__mid__option">
          <StorefrontIcon />
        </div>
        <div className="header__mid__option">
          <SupervisedUserCircleSharpIcon />
        </div>
        <div className="header__mid__option">

        </div>
      </div>

      <div className="header__rightsection"></div>
    </div>
  );
};

export default Header;
