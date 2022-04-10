import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./homePage.css";
import logo from "../myimgs/Logo-trans.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <nav>
        <ul>
          <li>
            <span>Main Network (0xF7f...3c2A)</span>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/my-account">
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/favourites">
                  My Domains
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/favourites">
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="mainhome">
        <img className="homelogo" src={logo} alt={"logo"} />
        <div className="searchbar">
          <div className="search_box">
            <div className="search_field">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="input"
                placeholder="Search names or addresses"
              />
              <select
                class="form-select select1"
                aria-label="Default select example"
              >
                <option selected>EN</option>
                <option value="1">ES</option>
                <option value="2">JN</option>
              </select>
              <button className="searchbtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
