import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/images/Netflix - Watch TV Shows Online, Watch Movies Online_files/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="HeaderSection">
      <section className="Header">
        <div>
          <ul className="menu">
            <li>
              <img src={NetflixLogo} width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browser by Languages</li>
          </ul>
        </div>
        <div>
          <ul className="user-options">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
