import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default Navigation;
