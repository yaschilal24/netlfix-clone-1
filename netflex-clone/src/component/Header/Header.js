import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./header.css"
const Header = () => {
  return (
    <>
   <header className="header">

      {/* LEFT SIDE */}
      <div className="header-left">

        {/* LOGO */}
        <h2 className="logo">NETFLIX</h2>
        {/* NAVIGATION */}
        <nav>
          <ul className="nav-menu">
            <li>
              <a href="#netflix">Netflix</a>
            </li>

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#tvshows">TV Shows</a>
            </li>

            <li>
              <a href="#movies">Movies</a>
            </li>

            <li>
              <a href="#latest">Latest</a>
            </li>

            <li>
              <a href="#mylist">My List</a>
            </li>

            <li>
              <a href="#languages">Browse by Languages</a>
            </li>
          </ul>
        </nav>

      </div>


      {/* RIGHT SIDE */}
      <div className="header-right">

        <ul className="header-icons">

          {/* SEARCH */}
          <li>
            <a href="#search" aria-label="Search">
              <SearchIcon />
            </a>
          </li>


          {/* NOTIFICATION */}
          <li>
            <a href="#notification" aria-label="Notifications">
              <NotificationsNoneIcon />
            </a>
          </li>


          {/* PROFILE */}
          <li>
            <a href="#profile" aria-label="Profile">
              <AccountBoxIcon />
            </a>
          </li>


          {/* DROPDOWN */}
          <li>
            <a href="#menu" aria-label="Menu">
              <ArrowDropDownIcon />
            </a>
          </li>

        </ul>

      </div>

    </header>
    
    </>
  )
}

export default Header
