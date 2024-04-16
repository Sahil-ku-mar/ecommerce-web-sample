import React from "react";
import "./Footer.css";
import Visa from "./../assets/payment/visa-icon.svg";
import Mastercard from "./../assets/payment/mastercard-icon.svg";
import Paypal from "./../assets/payment/paypal-icon.svg";
import instagram from "./../assets/social/instagram-icon.svg";
import facebook from "./../assets/social/facebook-icon.svg";
import telegram from "./../assets/social/telegram-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="company">
          <h1>Company</h1>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Store</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="career">
          <h1>Career Opportunities</h1>
          <ul>
            <li>
              <a href="#">Selling Programs</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
            <li>
              <a href="#">Cooperation</a>
            </li>
          </ul>
        </div>
        <div className="buy">
          <h1>How to Buy</h1>
          <ul>
            <li>
              <a href="#">Making Payments</a>
            </li>
            <li>
              <a href="#">Delivery Options</a>
            </li>
            <li>
              <a href="#">Buyer Protection</a>
            </li>
            <li>
              <a href="#">New User Guide</a>
            </li>
          </ul>
        </div>
        <div className="help">
          <h1>Help</h1>
          <ul>
            <li>
              <a href="#">Contacts Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-main">
      <div className="footer-bottom">
        <div className="payment">
          <img src={Visa} />
          <img src={Mastercard} />
          <img src={Paypal} />
        </div>
        <div className="language">
          <select>
            <option>English</option>
            <option>USD</option>
          </select>
        </div>
      </div>

      <div className="footer-bottom-container">
        <div className="city">
          <h1>165-179 Forster Road City of Monash, Melboume, Australia</h1>
        </div>
        <div className="copyright">
          <p>©2023 Copyright in reserved for lumine shop</p>
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
      </div>
    </footer>
  );
};

export default Footer;
