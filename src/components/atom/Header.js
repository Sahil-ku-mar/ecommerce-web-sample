import React from "react";
import card from "../../assets/card-icon.svg";
import logo from "../../assets/cart-icon.svg";
import facebook from "../../assets/facebook-icon.svg";
import heart from "../../assets/heart-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import icon from "../../assets/logo-icon.svg";
import profile from "../../assets/profile-icon.svg";
import search from "../../assets/search-icon.svg";
import telegram from "../../assets/telegram-icon.svg";
import tittle from "../../assets/tittle-icon.svg";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src={logo} />
          <p>Luminae</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Producs" />
          <select>
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
          </select>
          <div>
            <img src={search} />
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <img src={instagram} />
            </li>
            <li>
              <img src={facebook} />
            </li>
            <li>
              <img src={telegram} />
            </li>
          </ul>
        </div>
      </div>
      <div className="header-center">
        <div className="header-center-container">
          <div className="categories">
            <img src={icon} />
            <p>Categories</p>
            <select>
              <option>USD</option>
            </select>
            <select>
              <option>English</option>
            </select>
          </div>
          <div className="title">
            <img src={tittle} />
            <div>
              <h2>Weekly Men's Toiletries Coupons.</h2>
              <p>We extend Exclusive discounts to our male clientele</p>
            </div>
          </div>
          <div className="sign">
            <div>
              <img src={profile} />
              <p>Sign in</p>
            </div>
            <div>
              <img src={heart} />
              <p>Favorites</p>
            </div>
            <div>
              <img src={card} />
              <p>
                Card <span>3</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;